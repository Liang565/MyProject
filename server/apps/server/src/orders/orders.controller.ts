import { Body, Controller, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Order } from 'libs/db/models/order.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { userInfo } from 'os';
import { JwtAuth } from '../auth/auth.decorator';
import { CurrentUserId } from '../auth/current-user';
import { orderDto } from './order.dto';
@Crud({
  model: Order,
  routes: {
    find: {
      populate: ['user', 'commodity', 'userInfo'], //
    },
    create: {},
    findOne: {},
  },
})
@Controller('orders')
@ApiTags('订单')
export class OrdersController {
  constructor(
    @InjectModel(Order)
    private readonly model: ReturnModelType<typeof Order>,
  ) {}

  // 查询传入userid的订单
  @Post('/findOrder')
  @ApiOperation({ summary: '查询' })
  @JwtAuth()
  async findOrder(@CurrentUserId() userid, @Body() body: orderDto) {
    let res = await this.model
      .find({
        user: userid,
        ...body, //解构
      })
      .populate('commodity');
    return res;
  }
  // async findOrder(
  //   @CurrentUserId() userid,
  //   @Body() body: orderDto,
  //   @Query() Findquery,
  // ) {
  //   let { query } = Findquery;
  //   query = JSON.parse(query);
  //   // console.log(query);
  //   let res = await this.model
  //     .find({
  //       user: userid,
  //       ...body, //解构
  //     })
  //     .where(query.where)
  //     .populate('commodity');
  //   return res;
  // }
}
