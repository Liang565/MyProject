import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop, Ref } from '@typegoose/typegoose';

export class CommodityClass {
  // @ApiProperty({ description: '一级分类', example: '一级分类' })
  // @prop()
  // firstClass: string;
  // @ApiProperty({ description: '二级分类', example: '二级分类' })
  // @prop()
  // secondClass: string;
  // // //参数的话需要另外一个表？
  // // @ApiProperty({ description: '商品参数', example: '无' })
  // // @prop({ default: {} })
  // // parameter: object;

  @ApiProperty({ description: '分类名' })
  @prop()
  title: string;

  @ApiProperty({ description: '上级' })
  @prop({
    ref: 'CommodityClass', //自身关联
  })
  parent: Ref<CommodityClass>;

  @ApiProperty({ description: '下级' })
  @prop({
    ref: 'CommodityClass',
    localField: '_id',
    foreignField: 'parent',
  })
  children: Ref<CommodityClass>;
}
