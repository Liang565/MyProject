import { ApiProperty } from '@nestjs/swagger';
import { Ref } from '@typegoose/typegoose';

export class CartDto {
  @ApiProperty({ description: 'ååid' })
  commodity: string;

  @ApiProperty({ description: 'æ°é' })
  goodsNum: number;
}
