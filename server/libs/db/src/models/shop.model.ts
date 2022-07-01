import { ApiProperty } from '@nestjs/swagger';
import { index, prop, Ref } from '@typegoose/typegoose';
import { User } from './user.model';

@index({ title: 1 })
export class Shop {
  //_id默认索引
  @prop()
  @ApiProperty({ description: '商铺名称' })
  title: string;

  @prop({ ref: 'User' })
  @ApiProperty({ description: '所属用户名' })
  user: Ref<User>;

  @prop()
  @ApiProperty({ description: '商铺简介' })
  description: string;

  @prop()
  @ApiProperty({ description: '商铺图片' })
  images: string;

  @prop()
  @ApiProperty({ description: '商铺地址' })
  address: string;

  @prop()
  @ApiProperty({ description: '商铺电话' })
  phone: string;

  @prop()
  @ApiProperty({ description: '组件' })
  components: [];
}
