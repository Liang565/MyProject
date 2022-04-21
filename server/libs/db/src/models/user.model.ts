import { ApiProperty } from '@nestjs/swagger';
import { defaultClasses, modelOptions, prop } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';
import { Deflate } from 'zlib';

export enum roles {
  ADMIN = '1',
  USER = '2',
}

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

  @ApiProperty({ description: '身份', example: '2' })
  @prop({ enum: roles })
  // role: roles;
  role: roles;
  @ApiProperty({ description: '状态', example: true })
  @prop()
  state: boolean;
  // @ts-ignore
  // get ROLE(this: DocumentType<User>) {
  //   if (this.role == '1') {
  //     return 'ADMIN';
  //   } else return 'USER';
  // }
  get STATE(this: DocumentType<User>) {
    if (this.state == true) {
      return '启用';
    } else return '禁用';
  }
}
