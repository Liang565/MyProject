import { ApiProperty } from '@nestjs/swagger';
import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { Commodity } from './commodity.model';
import { Shop } from './shop.model';

import { User } from './user.model';
import { UserInfo } from './userInfo.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
}) //swagger创建时展示创建时间和更新时间
export class Order {
  //绑定用户
  @ApiProperty({ description: '绑定用户' })
  @prop({ ref: 'User' })
  user: Ref<User>;
  //绑定商品
  @ApiProperty({ description: '绑定商品' })
  @prop({ ref: 'Commodity' })
  commodity: Ref<Commodity>;
  //绑定收货人信息
  @ApiProperty({ description: '收货人信息' })
  @prop({ ref: 'UserInfo' })
  userInfo: Ref<UserInfo>;
  @ApiProperty({ description: '订单数量' })
  @prop()
  goodsNum: number;
  @ApiProperty({ description: '金额' })
  @prop()
  money: string;
  @ApiProperty({ description: '发货地址' })
  @prop()
  goodsAddress: string;
  @ApiProperty({ description: '备注' })
  @prop()
  remarks: string;
  @ApiProperty({ description: '状态' })
  @prop()
  state: string;
  @ApiProperty({ description: '商铺' })
  @prop({ ref: 'Shop' })
  shop: Ref<Shop>;
  /**
   *模型方法。
   * @param uid 用户id
   * @returns
   */
  static async getUserOrder(uid) {
    const orderModel = getModelForClass(Order);
    //find({user:uid}) [1,2,3,4]
    //mongodb 操作
    const res = await orderModel.find({ user: { $in: uid } });
    return res;
  }
}
