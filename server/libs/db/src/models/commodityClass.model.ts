import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
}) //swagger创建时展示创建时间和更新时间
export class CommodityClass {
  @ApiProperty({ description: '一级分类', example: '一级分类' })
  @prop()
  firstClass: string;
  @ApiProperty({ description: '二级分类', example: '二级分类' })
  @prop()
  secondClass: string;
  // //参数的话需要另外一个表？
  // @ApiProperty({ description: '商品参数', example: '无' })
  // @prop({ default: {} })
  // parameter: object;
}
