import { Module } from '@nestjs/common';
import { CommonModule } from 'libs/common/common.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DbModule } from 'libs/db';
import { MulterModule } from '@nestjs/platform-express';
import { OrdersModule } from './orders/orders.module';
import { ShopsModule } from './shops/shops.module';
import { CommodityClassModule } from './commodity-class/commodity-class.module';
import { CommoditysModule } from './commoditys/commoditys.module';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ActionModule } from './action/action.module';
import { ActionController } from './action/action.controller';
import { ActionService } from './action/action.service';
import { UserInfoController } from './user-info/user-info.controller';
import { UserInfoModule } from './user-info/user-info.module';
import { BuildHomeModule } from './build-home/build-home.module';
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
    AuthModule,
    CommonModule,
    UsersModule,
    DbModule,
    CommoditysModule,
    CommodityClassModule,
    ShopsModule,
    OrdersModule,
    ShoppingCartModule,
    ActionModule,
    UserInfoModule,
    BuildHomeModule,
  ],
  controllers: [AppController, ShoppingCartController],
  providers: [AppService, ActionService],
})
export class AppModule {}
