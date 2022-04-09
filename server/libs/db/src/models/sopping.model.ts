import { prop, Ref } from '@typegoose/typegoose';
import { Commodity } from './commodity.model';
import { User } from './user.model';

export class Sopping {
  //当前 用户 user_Id
  @prop({ ref: 'User' })
  user: Ref<User>;
  //绑商品id,可以改参数里面的剩余量？？
  @prop({ ref: 'commodity' })
  commoId: Ref<Commodity>;
}
