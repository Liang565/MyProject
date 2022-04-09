import { Module } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CommoditysController } from './commoditys.controller';
import { CommoditysService } from './commoditys.service';

@Module({
  imports: [UsersService],
  controllers: [CommoditysController],
  providers: [CommoditysService],
})
export class CommoditysModule {}
