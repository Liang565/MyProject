import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { User } from './user.model';

export class UserInfo {
  @ApiProperty({ description: '收货人' })
  @prop()
  name: string;
  @ApiProperty({ description: '地址' })
  @prop()
  address: string;
  @ApiProperty({ description: '电话' })
  @prop()
  tel: string;
  @ApiProperty({ description: '邮政编码' })
  @prop()
  postalCode: string;
  @ApiProperty({ description: '默认地址' })
  @prop()
  isDefault: boolean;
  @ApiProperty({ description: '邮政编码' })
  @prop({ ref: 'User' })
  user: Ref<User>;
}
