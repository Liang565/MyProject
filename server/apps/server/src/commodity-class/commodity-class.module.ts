import { Module } from '@nestjs/common';
import { CommodityClassController } from './commodity-class.controller';
import { CommodityClassService } from './commodity-class.service';

@Module({
  controllers: [CommodityClassController],
  providers: [CommodityClassService]
})
export class CommodityClassModule {}
