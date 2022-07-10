import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { ShoppingCart } from 'libs/db/models/shoppingCart.model';

import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { JwtAuth } from '../auth/auth.decorator';
import { CurrentUserId } from '../auth/current-user';
import { CartDto } from '../auth/dto/cart.dto';
@Crud({
  model: ShoppingCart,
  routes: {
    find: {
      populate: ['user', 'commodity'], //
    },
    create: {},
    findOne: {},
  },
})
@Controller('shopping-cart')
@ApiTags('购物车')
@JwtAuth()
export class ShoppingCartController {
  constructor(
    @InjectModel(ShoppingCart)
    private readonly model: ReturnModelType<typeof ShoppingCart>,
  ) {}

  //购物车新增
  @ApiOperation({ summary: '添加商品到购物车' })
  @Post('addCart')
  async addCart(@Body() body, @CurrentUserId() uid) {
    const temp = await this.model.find({
      user: uid,
      commodity: body.commodity,
    });
    //已经有相同商品
    if (temp.length != 0) {
      const num = temp[0].goodsNum + body.goodsNum;
      const res = await this.model.updateOne(
        { _id: temp[0].id },
        {
          goodsNum: num,
        },
      );
    }
    //无相同商品
    else {
      const res = await this.model.create({
        user: uid,
        commodity: body.commodity,
        goodsNum: body.goodsNum,
      });
    }
  }
}
