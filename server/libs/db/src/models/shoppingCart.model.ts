import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Commodity } from './commodity.model';
import { User } from './user.model';
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
}) //swagger创建时展示创建时间和更新时间
export class ShoppingCart {
  //绑定用户
  @ApiProperty({ description: '绑定用户' })
  @prop({ ref: 'User' })
  user: Ref<User>;
  //绑定商品
  @ApiProperty({ description: '绑定商品' })
  @prop({ ref: 'Commodity' })
  commodity: Ref<Commodity>;

  @ApiProperty({ description: '加入购物车数量' })
  @prop()
  goodsNum: number;
}
