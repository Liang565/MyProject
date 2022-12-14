import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Commodity } from 'libs/db/models/commodity.model';
import { User } from 'libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';

@Crud({
  model: User,
  routes: {
    find: {
      populate: ['commodity'],
    },
  },
})
@Controller('users')
@ApiTags('web用户')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
  ) {}
}
