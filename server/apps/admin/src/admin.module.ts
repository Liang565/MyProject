import { Module } from '@nestjs/common';
import { DbModule } from 'libs/db';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CommoditysModule } from './commoditys/commoditys.module';
import { CommodityClassModule } from './commodity-class/commodity-class.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from 'libs/common';
import { ShopsModule } from './shops/shops.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    DbModule,
    CommonModule,
    UsersModule,
    CommoditysModule,
    CommodityClassModule,
    AuthModule,
    ShopsModule,
    OrdersModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
