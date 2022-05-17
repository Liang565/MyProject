import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { CommodityClass } from './commodityClass.model';
import { Shop } from './shop.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
}) //swagger创建时展示创建时间和更新时间
export class Commodity {
  @ApiProperty({ description: '商品名', example: '商品名' })
  @prop()
  commodityName: string;

  @ApiProperty({ description: '商品介绍', example: '默认' })
  @prop()
  commodityIntroduce: string;

  //介绍里面的图片
  @ApiProperty({ description: '图片' })
  @prop()
  image?: string[];

  //关联分类表
  @prop({ ref: 'CommodityClass' })
  @ApiProperty({ description: '关联的分类表', example: 'class_id' })
  title: Ref<CommodityClass>;

  //参数？
  @prop({ default: {} })
  @ApiProperty({ description: '商品的参数', example: '{}' })
  parameter: Object;

  //库存数量，
  @prop()
  @ApiProperty({ description: '商品数量', example: 0 })
  commodityNum: number;
  //因为参数不同，同名的商品不同参数有不同库存，
  @prop({ ref: 'Shop' })
  @ApiProperty({ description: '所属店铺' })
  shop: Ref<Shop>;
}
