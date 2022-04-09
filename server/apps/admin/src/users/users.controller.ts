import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { roles, User } from 'libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { UsersService } from './users.service';

@Crud({
  model: User,
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
    private Service: UsersService,
  ) {}

  // @Post('zhuce/:id')
  // async zhuce(@Body() Body, @Query() query, @Param('id') id) {
  //   const { username, password } = Body;
  //   const res = this.model.findOne({ username });
  //   if (!res) {
  //     return await this.model.create(Body);
  //   } else {
  //     throw new BadRequestException('用户已注册');
  //   }
  // await http.post('1111',{}) body
  // await http.get('111',{
  //   params:{
  //   }
  // }) query
  // await http.get(`zhuce/${id}`);
  // }
}
