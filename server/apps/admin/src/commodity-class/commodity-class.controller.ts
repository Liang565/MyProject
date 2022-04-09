import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { CommodityClass } from 'libs/db/models/commodityClass.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';

@Crud({
  model: CommodityClass,
})
@Controller('commodity-class')
@ApiTags('商品分类')
export class CommodityClassController {
  constructor(
    @InjectModel(CommodityClass)
    private readonly model: ReturnModelType<typeof CommodityClass>,
  ) {}
}
