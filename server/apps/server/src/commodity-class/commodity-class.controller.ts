import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { get } from 'http';
import { DbModule } from 'libs/db';
import { CommodityClass } from 'libs/db/models/commodityClass.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { ClassDto } from '../auth/dto/Class.dto';
import { RegisterDto } from '../auth/dto/register.dto';
import { updataDto } from '../auth/dto/updata.dto';

@Crud({
  model: CommodityClass,
  routes: {
    find: {
      populate: [{ path: 'children', populate: 'children' }],
    },
  },
})
@Controller('commodity-class')
@ApiTags('商品分类')
export class CommodityClassController {
  constructor(
    @InjectModel(CommodityClass)
    private readonly model: ReturnModelType<typeof CommodityClass>,
  ) {}
  @Post('addClass')
  @ApiOperation({ summary: '添加分类' })
  //@Body()  dto从客户端传上来的参数
  async add(@Body() dto: ClassDto) {
    //表示传入的Dto是一个RegisterDto类型
    const { title, parent, children } = dto; //结构出dto里面的参数

    if (title == '' || !title) {
      throw new BadRequestException('分类名为空');
    }
    const res = await this.model.findOne({ title }); //找同名的
    if (!res) {
      const Class = await this.model.create({
        title,
        parent,
        children,
      });
      return Class;
    } else {
      throw new BadRequestException('用户名已注册');
    }
  }

  @Post('/updata/:id')
  @ApiOperation({ summary: '修改父类为空用的' })
  async update1(@Param('id') id: string, @Body() dto: updataDto) {
    const { title, parent } = dto;
    if (title == '' || !title) {
      throw new BadRequestException('分类名为空');
    }
    const res = await this.model.findOne({ title }); //新传进来的title找同名的title，情况1，传入原title找到原对象，情况2，找不到对象，情况3，找到对象但是不是原对象
    const Id = await this.model.findById(id); //原来的title
    if (!res || res._id == id) {
      //同一个对象，如果不同，证明名字重复了
      // if (!res) {
      if (!parent || parent == '') {
        //parent为空，
        const Class = await this.model.updateOne(
          { _id: id },
          {
            title: title,
            $unset: {
              parent: '',
            },
          },
        );
        return Class;
      } else {
        //单纯的修改，
        const Class = await this.model.updateOne(
          { _id: id },
          {
            title: title,
            $set: {
              parent: parent,
            },
          },
        );
        return Class;
      }
    } else {
      throw new BadRequestException('用户名已存在');
    }
  }
}
