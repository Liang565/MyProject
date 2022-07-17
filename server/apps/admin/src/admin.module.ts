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
import { MulterModule } from '@nestjs/platform-express';
import { PromissModule } from './promiss/promiss.module';
import { ComponentsController } from './components/components.controller';
import { ComponentsModule } from './components/components.module';
const MAO = require('multer-aliyun-oss');
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION, //地方
              accessKeyId: process.env.OSS_ACCESSKEYID, //子账号id
              accessKeySecret: process.env.OSS_ACCESSKEYSECRET, //子账号secret
              bucket: process.env.OSS_BUCKET, //存储空间名称
              // region: 'oss-cn-beijing', //地方
              // accessKeyId: 'LTAI5tR5y91t2TmRZSbS6WYp', //子账号id
              // accessKeySecret: 'NCnqYVA1jd0UhevvsgoxD5kGc9YpJY', //子账号secret
              // bucket: 'lianger1', //存储空间名称
            },
          }),
        };
      },
    }),
    DbModule,
    CommonModule,
    UsersModule,
    CommoditysModule,
    CommodityClassModule,
    AuthModule,
    ShopsModule,
    OrdersModule,
    PromissModule,
    ComponentsModule,
  ],
  controllers: [AdminController, ComponentsController],
  providers: [AdminService],
})
export class AdminModule {}
