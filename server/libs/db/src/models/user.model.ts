import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';

export enum roles {
  ADMIN = '1',
  USER = '2',
}

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
  @prop({
    select: false, //不展示出来
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val; //创建用户时密码会散列
    },
  })
  password: string;

  @ApiProperty({ description: '身份' })
  @prop({ enum: roles })
  role: roles;
}
