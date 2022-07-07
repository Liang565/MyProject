import { ApiProperty } from '@nestjs/swagger';

export class info {
  @ApiProperty({ description: '收货人' })
  name: string;
  @ApiProperty({ description: '地址' })
  address: string;
  @ApiProperty({ description: '电话' })
  tel: string;
  @ApiProperty({ description: '邮政编码' })
  postalCode: string;
  @ApiProperty({ description: '默认地址' })
  isDefault: boolean;
}
