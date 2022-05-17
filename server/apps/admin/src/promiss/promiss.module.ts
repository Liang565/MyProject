import { Module } from '@nestjs/common';
import { PromissController } from './promiss.controller';
import { PromissService } from './promiss.service';

@Module({
  controllers: [PromissController],
  providers: [PromissService]
})
export class PromissModule {}
