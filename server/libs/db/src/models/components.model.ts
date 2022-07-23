import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';

interface componentType {
  key: string;
  value: string;
  label: string;
}

export class Components {
  @prop()
  @ApiProperty({ description: '名称' })
  name: string;

  @prop({ default: {} })
  @ApiProperty({ description: '配置文件' })
  config: {};

  @prop({ default: {} })
  @ApiProperty({ description: '内容' })
  content: {};

  @prop({ default: {} })
  @ApiProperty({ description: '类型' })
  type: componentType;

  @prop()
  @ApiProperty({ description: '标题' })
  title: string;
  @prop({ default: {} })
  @ApiProperty({ description: '类型' })
  key: string;
}
