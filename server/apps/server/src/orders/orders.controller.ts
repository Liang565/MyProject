import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Order } from 'libs/db/models/order.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
@Crud({
  model: Order,
  routes: {
    find: {
      populate: ['user', 'commodity'], //
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
