import { prop, Ref } from '@typegoose/typegoose';
import { Sopping } from './sopping.model';
import { User } from './user.model';

export class Order {
  //绑定用户
  @prop({ ref: 'User' })
  user: Ref<User>;
  //绑定购物车
  @prop({ ref: 'Sopping' })
  sopping: Ref<Sopping>;
}
