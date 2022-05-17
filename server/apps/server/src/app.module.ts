import { Module } from '@nestjs/common';
import { CommonModule } from 'libs/common/common.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DbModule } from 'libs/db';

@Module({
  imports: [AuthModule, CommonModule, UsersModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
