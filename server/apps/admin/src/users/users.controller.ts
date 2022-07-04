import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { roles, User } from 'libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { RegisterDto } from '../auth/dto/register.dto';
import { UsersService } from './users.service';

@Crud({
  model: User,
  routes: {
    find: {
      sort: { _id: -1 },
    },
  },
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
    private Service: UsersService,
  ) {}

  // @Post('zhuce/:id')
  // async zhuce(@Body() Body, @Query() query, @Param('id') id) {
  //   const { username, password } = Body;
  //   const res = this.model.findOne({ username });
  //   if (!res) {
  //     return await this.model.create(Body);
  //   } else {
  //     throw new BadRequestException('用户已注册');
  //   }
  // await http.post('1111',{}) body
  // await http.get('111',{
  //   params:{
  //   }
  // }) query
  // await http.get(`zhuce/${id}`);
  // }

  @Get()
  async find(@Query() query) {
    const { limit, page, where } = JSON.parse(query.query);
    let match = {};
    if (where._id) {
      match['_id'] = where._id;
    }
    if (where.username) {
      match['username'] = { $regex: where.username };
    }
    let skip = (page - 1) * limit;
    let aggregate = [
      // {
      //   $lookup: {
      //     from: 'promiss',
      //     localField: 'promiss',
      //     foreignField: '_id',
      //     as: 'promiss',
      //   },
      // },
      // {
      //   $unwind: 'promiss',//转换成对象
      // },
      {
        $match: match,
      },
      {
        $sort: { _id: -1 },
      },
    ];
    const data = await this.model.aggregate([
      // ...aggregate,
      // {
      //   $lookup: {
      //     from: 'promiss',
      //     localField: 'promiss',
      //     foreignField: '_id',
      //     as: 'promiss',
      //   },
      // },
      // {
      //   $unwind: 'promiss',//转换成对象
      // },
      {
        $match: match,
      },
      {
        $sort: { _id: -1 },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);
    const count = await this.model.aggregate([
      // ...aggregate,
      // {
      //   $lookup: {
      //     from: 'promiss',
      //     localField: 'promiss',
      //     foreignField: '_id',
      //     as: 'promiss',
      //   },
      // },
      // {
      //   $unwind: 'promiss',//转换成对象
      // },
      {
        $match: match,
      },
      {
        $sort: { _id: -1 },
      },
      { $group: { _id: null, count: { $sum: 1 } } },
    ]);
    let total = count[0].count;
    let lastPage = Math.floor(total / limit);
    return {
      data,
      total,
      lastPage,
    };
  }

  //注册的路径：习惯用register
  @Post('add')
  @ApiOperation({ summary: '注册' })
  //@Body()  dto从客户端传上来的参数
  async add(@Body() dto: RegisterDto) {
    //表示传入的Dto是一个RegisterDto类型
    const { username, password, role, state } = dto; //结构出dto里面的参数

    if (username == '' || password == '' || !username || !password) {
      throw new BadRequestException('用户名或者密码为空');
    }
    const res = await this.model.findOne({ username }); //找同名的
    if (!res) {
      const user = await this.model.create({
        username,
        password,
        role, //admin是1管理员 都是2USER
        state, //用户状态
      });
      return user;
    } else {
      throw new BadRequestException('用户名已注册');
    }
  }
}
