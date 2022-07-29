import { ApiProperty } from '@nestjs/swagger';

export class orderDto {
  @ApiProperty({ description: '绑定用户' })
  user?: string;
  //绑定商品
  @ApiProperty({ description: '绑定商品' })
  commodity?: string;
  //绑定收货人信息
  @ApiProperty({ description: '收货人信息' })
  userInfo?: string;
  @ApiProperty({ description: '订单数量' })
  goodsNum?: number;
  @ApiProperty({ description: '金额' })
  money?: string;
  @ApiProperty({ description: '发货地址' })
  goodsAddress?: string;
  @ApiProperty({ description: '备注' })
  remarks?: string;
  @ApiProperty({ description: '状态' })
  state?: string;
  @ApiProperty({ description: '商铺' })
  shop?: string;
}
