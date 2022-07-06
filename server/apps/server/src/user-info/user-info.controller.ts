import { Controller } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserInfo } from 'libs/db/models/userInfo.model';
import { InjectModel } from 'nestjs-typegoose-next';
import { userInfo } from 'os';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: userInfo,
})
@Controller('user-info')
@ApiTags('用户信息')
export class UserInfoController {
  constructor(
    @InjectModel(UserInfo)
    private readonly model: ReturnModelType<typeof UserInfo>,
  ) {}
}
