import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

import { buildHome } from 'libs/db/models/buildHome.model';
import { InjectModel } from 'nestjs-typegoose-next';
import { buildDto } from '../auth/dto/build.dto';

@Controller('build-home')
@ApiTags('配置')
export class BuildHomeController {
  constructor(
    @InjectModel(buildHome)
    private readonly model: ReturnModelType<typeof buildHome>,
  ) {}
  @Post('findone')
  @ApiOperation({ summary: '搜索配置' })
  async findone(@Body() dto: buildDto) {
    const { name } = dto;
    if (!name || name == '') {
      throw new BadRequestException('配置名为空');
    }
    const res = await this.model.findOne({ name: name });
    if (res) {
      return res;
    } else {
      return null;
    }
  }
}
