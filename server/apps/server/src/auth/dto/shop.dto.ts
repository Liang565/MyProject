import { ApiProperty } from '@nestjs/swagger';
import { Ref } from '@typegoose/typegoose';
import { User } from 'libs/db/models/user.model';

export class ShopDto {
  @ApiProperty({ description: '商铺名称' })
  title: string;

  @ApiProperty({ description: '所属用户' })
  user: string;

  @ApiProperty({ description: '商铺简介' })
  description: string;

  @ApiProperty({ description: '商铺图片' })
  images: string;

  @ApiProperty({ description: '商铺地址' })
  address: string;

  @ApiProperty({ description: '商铺电话' })
  phone: string;

  @ApiProperty({ description: '组件' })
  components: [];
}
