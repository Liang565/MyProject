import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserInfo } from 'libs/db/models/userInfo.model';
import { InjectModel } from 'nestjs-typegoose-next';
import { userInfo } from 'os';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUserId } from '../auth/current-user';
import { info } from '../auth/dto/info.dto';
import { JwtAuth } from '../auth/auth.decorator';
import { identity } from 'rxjs';

@Crud({
  model: UserInfo,
})
@Controller('user-info')
@ApiTags('用户信息')
export class UserInfoController {
  constructor(
    @InjectModel(UserInfo)
    private readonly model: ReturnModelType<typeof UserInfo>,
  ) {}

  //创建用户
  @ApiOperation({ summary: '新增信息' })
  @Post()
  @JwtAuth()
  async create(@CurrentUserId() userid, @Body() body: info) {
    const { name, address, tel, postalCode, isDefault } = body;
    if (!name || name === '') throw new BadRequestException('姓名为空');
    if (!address || address === '') throw new BadRequestException('地址为空');
    if (!tel || tel === '') throw new BadRequestException('联系电话为空');

    const mo = {
      name,
      address,
      tel,
      postalCode,
      isDefault,
      user: userid,
    };
    const res = await this.model.create(mo);
    return res;
  }
  @Put('/:id')
  @ApiOperation({ summary: '修改信息' })
  @JwtAuth()
  async updated(@Param('id') id, @Body() body: info, @CurrentUserId() userid) {
    const res = await this.model.findById({ _id: id });
    if (res) {
      const { name, address, tel, postalCode, isDefault } = body;
      if (name === '') throw new BadRequestException('姓名为空');
      if (address === '') throw new BadRequestException('地址为空');
      if (tel === '') throw new BadRequestException('联系电话为空');
      //只能有一个默认地址，切换后把其他地址的isDefault改成false
      if (isDefault == true) {
        const changeIs = await this.model.find({ isDefault: isDefault });
        for (let i in changeIs) {
          const iid = changeIs[i]._id;
          const info1 = await this.model.updateOne(
            { _id: iid },
            {
              isDefault: false,
            },
          );
        }
      }

      const info = await this.model.updateOne({ _id: id }, body);
    } else throw new BadRequestException('请刷新重新尝试~');
  }
}
