import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from 'libs/db/models/user.model';
import { InjectModel } from 'nestjs-typegoose-next';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  //注册的路径：习惯用register
  @Post('register')
  @ApiOperation({ summary: '注册' })

  //@Body()  dto从客户端传上来的参数
  async register(@Body() dto: RegisterDto) {
    //表示传入的Dto是一个RegisterDto类型
    const { username, password } = dto; //结构出dto里面的参数
    if (username == '' || password == '') {
      throw new BadRequestException('用户名或者密码为空');
    }
    const res = await this.userModel.findOne({ username }); //找同名的
    if (!res) {
      const user = await this.userModel.create({
        username,
        password,
        role: 'user', //除了admin是1 管理员其他都是2USER
        state: true, //默认新注册的用户状态都是启用的
      });
      return user;
    } else {
      throw new BadRequestException('用户已注册');
    }
  }

  //登录，这个是需要用本地用户名验证的策略
  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local')) //localStrategy的名字,守卫
  //@Body()  dto从客户端传上来的参数
  async login(@Body() dto: LoginDto, @Req() req) {
    // return req.user;
    return {
      //以用户的id作为主键生成token，使得每个用户的token是唯一的
      token: this.jwtService.sign(String(req.user._id)),
    };
  }

  //获取用户登录后的token，查看user的信息
  //必须需要用户登录后，获得了token，才可以使用这个接口
  //jwt登录策略
  @Get('user')
  @ApiOperation({ summary: '获取信息' })
  @UseGuards(AuthGuard('jwt')) //jwtStrategy的名字,守卫
  @ApiBearerAuth() //表示这个接口需要token才可以使用
  async user(@Req() req) {
    return req.user;
  }
}
