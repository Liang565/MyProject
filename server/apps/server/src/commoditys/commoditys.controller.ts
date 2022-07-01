import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Commodity } from 'libs/db/models/commodity.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { ShopsService } from '../shops/shops.service';
import { CommoditysInterceptor } from './commoditys.interceptor';

@Crud({
  model: Commodity,
  routes: {
    find: {
      populate: ['shop', 'title'],
      // decorators: [UseInterceptors(CommoditysInterceptor)],
    },
    create: {},
    findOne: {},
  },
})
@Controller('commoditys')
@ApiTags('商品')
export class CommoditysController {
  constructor(
    @InjectModel(Commodity)
    private readonly model: ReturnModelType<typeof Commodity>,
    private ShopsService: ShopsService,
  ) {}

  @Post('/Goods/:id')
  @ApiOperation({ summary: 'user下查询店铺' })
  async getGoods(@Param('id') id: string) {
    //查user_id下的商店，
    const res = await this.ShopsService.MODEL.find({ user: id });

    let SShop = [];
    SShop = res.map((v) => ({
      id: v._id,
      title: v.title,
    }));
    return SShop;
    // console.log(SShop);
    // const rres = await this.model.find({ shop: SShop[0].id });
    // console.log(rres);
  }
}
