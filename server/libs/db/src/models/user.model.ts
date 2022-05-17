import { ApiProperty } from '@nestjs/swagger';
import { defaultClasses, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';
import { Deflate } from 'zlib';
import { Promiss } from './promiss.model';

export enum roles {
  ADMIN = 'admin',
  USER = 'user',
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

  @ApiProperty({ description: '身份', example: 'user' })
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
  @ApiProperty({ description: '用户头像' })
  @prop()
  image: string;

  @ApiProperty({ description: '权限' })
  @prop({ ref: 'Promiss' })
  promiss: Ref<Promiss>[];
}
