import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { ShoppingCart } from 'libs/db/models/shoppingCart.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
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
export class ShoppingCartController {
  constructor(
    @InjectModel(ShoppingCart)
    private readonly model: ReturnModelType<typeof ShoppingCart>,
  ) {}
}
