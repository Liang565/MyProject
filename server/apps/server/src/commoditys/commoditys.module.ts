import { Module } from '@nestjs/common';
import { ShopsService } from '../shops/shops.service';

import { CommoditysController } from './commoditys.controller';
import { CommoditysService } from './commoditys.service';

@Module({
  imports: [ShopsService],
  controllers: [CommoditysController],
  providers: [CommoditysService, ShopsService],
  exports: [ShopsService],
})
export class CommoditysModule {}
