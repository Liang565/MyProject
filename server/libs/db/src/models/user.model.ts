import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
}) //swagger创建时展示创建时间和更新时间
export class User {
  @ApiProperty({ description: '用户名', example: 'user' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'pass' })
  @prop()
  password: string;
}
