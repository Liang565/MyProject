import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose-next';
import { buildHome } from 'libs/db/models/buildHome.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { buildDto } from '../auth/dto/build.dto';

@Crud({
  model: buildHome,
})
@Controller('build-home')
@ApiTags('配置')
export class BuildHomeController {
  constructor(
    @InjectModel(buildHome)
    private readonly model: ReturnModelType<typeof buildHome>,
  ) {}

  @Post('create')
  @ApiOperation({ summary: '新增配置' })
  async create(@Body() dto: buildDto) {
    const { name, components } = dto;
    if (!name || name == '') {
      throw new BadRequestException('配置名为空');
    }
    const res = await this.model.findOne({ name: name });
    if (res) {
      throw new BadRequestException('配置名已存在');
    } else {
      const res = await this.model.create({
        name: name,
        components: components,
      });
      return res;
    }
  }
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
  // @Post('updateOne/:id')
  // @ApiOperation({ summary: '修改更新' })
  // async update(@Body() dto: buildDto, @Param('id') id: string) {
  //   const { name, components } = dto;
  //   if (!name || name == '') {
  //     throw new BadRequestException('配置名为空');
  //   }
  //   const res = await this.model.findOne({ name: name });

  //   if (res && res.id !== id) {
  //     throw new BadRequestException('配置名已存在');
  //   } else {
  //     const a = await this.model.findByIdAndUpdate(id, {
  //       name: name,
  //       components: components,
  //     });
  //   }
  // }
}
