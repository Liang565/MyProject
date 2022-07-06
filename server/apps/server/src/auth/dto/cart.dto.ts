import { ApiProperty } from '@nestjs/swagger';
import { Ref } from '@typegoose/typegoose';

export class CartDto {
  @ApiProperty({ description: '商品id' })
  commodity: string;

  @ApiProperty({ description: '数量' })
  goodsNum: number;
}
