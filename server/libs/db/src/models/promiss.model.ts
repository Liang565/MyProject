import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';

export class Promiss {
  @prop()
  @ApiProperty({ description: '权限' })
  name: string;

  @prop()
  @ApiProperty({ description: '分类' })
  category: string;
}
