import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { Commodity } from './commodity.model';
import { Shop } from './shop.model';
import { User } from './user.model';

//操作类型
export enum Actions {
  LIKE = 'like',
}
//操作对象模型
export enum Types {
  Commodity = 'Commodity',
  SHOP = 'Shop',
}

export class Action {
  @prop({ ref: 'User' })
  @ApiProperty({ description: '用户' })
  user: Ref<User>;

  @prop({ enum: Actions })
  @ApiProperty({ description: '操作类型' })
  action: Actions;

  @prop({ enum: Types })
  @ApiProperty({ description: '模型' })
  type: Types;

  @prop({ refPath: 'type' })
  @ApiProperty({ description: '目标' })
  object: Ref<Commodity | Shop>;
}
