import { Module } from '@nestjs/common';
import { BuildHomeController } from './build-home.controller';

@Module({
  controllers: [BuildHomeController]
})
export class BuildHomeModule {}
