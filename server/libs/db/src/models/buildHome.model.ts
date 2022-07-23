import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';

export class buildHome {
  @prop()
  @ApiProperty({ description: '名称' })
  name: string;
  @prop()
  @ApiProperty({ description: '组件' })
  components: [];
}
