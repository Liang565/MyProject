import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Order } from 'libs/db/models/order.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { userInfo } from 'os';
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
}
