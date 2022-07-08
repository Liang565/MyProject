import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref } from '@typegoose/typegoose';
import { User } from './user.model';

export class UserInfo {
  @ApiProperty({ description: '收货人' })
  @prop()
  name: string;

  @ApiProperty({ description: '省份' })
  @prop()
  province: string;

  @ApiProperty({ description: '城市' })
  @prop()
  city: string;

  @ApiProperty({ description: '区县' })
  @prop()
  county: string;

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
  @ApiProperty({ description: '绑定用户' })
  @prop({ ref: 'User' })
  user: Ref<User>;
}
