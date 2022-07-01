import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Shop } from 'libs/db/models/shop.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { CurrentUserId } from '../auth/current-user';
import { ShopDto } from '../auth/dto/shop.dto';
import { ShopInterceptorInterceptor } from './shop-interceptor.interceptor';

@Crud({
  model: Shop,
  routes: {
    find: {
      populate: 'user',
      // decorators: [UseInterceptors(ShopInterceptorInterceptor)],//大神的包里面可以用拦截器
    },
    create: {},
    findOne: {},
  },
})
@Controller('shops')
@ApiTags('商铺')
//拦截全局
// @UseInterceptors(ShopInterceptorInterceptor)
export class ShopsController {
  constructor(
    @InjectModel(Shop) private readonly model: ReturnModelType<typeof Shop>,
  ) {}

  // @UseInterceptors(ShopInterceptorInterceptor)//拦截这个请求下
  @UseGuards(AuthGuard('jwt'))
  @Post('addShop')
  @ApiOperation({ summary: '新增店铺' })
  //@Body()  dto从客户端传上来的参数
  async add(@Body() dto: ShopDto, @CurrentUserId() uid) {
    //表示传入的Dto是一个RegisterDto类型
    const { title, user, description, images, address, phone, components } =
      dto;
    //   dto; //结构出dto里面的参数

    if (title == '' || user == '' || !title || !user) {
      throw new BadRequestException('用户名或者店铺名为空');
    }

    const res = await this.model.findOne({ title }); //找同名的
    if (!res) {
      const shop = await this.model.create({
        title,
        user,
        description,
        images,
        address,
        phone,
      });
      return shop;
    } else {
      throw new BadRequestException('商铺名已注册');
    }
  }
}
