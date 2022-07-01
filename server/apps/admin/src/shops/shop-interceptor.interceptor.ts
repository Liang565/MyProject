import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';
import { Order } from 'libs/db/models/order.model';
import { User } from 'libs/db/models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class ShopInterceptorInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    //Promise<any> 异步
    const req = context.switchToHttp().getRequest();
    // const { query } = req.query;
    // let queryOption = JSON.parse(query); //字符串传回对象

    console.log('拦截器拦截');
    console.log(req);
    console.log('输出结束');

    // console.log(queryOption);
    // const orderModel = getModelForClass(Order);
    // // const res = await orderModel;
    // // console.log(res);

    // if (queryOption?.where?.user) {
    //   const userModel = getModelForClass(User); //获取User模型
    //   //
    //   // const res = userModel.aggregate([
    //   //   {
    //   //     $match: {},
    //   //   },
    //   //   {
    //   //     $lookup: {
    //   //       from: 'users',
    //   //       localField: 'user',
    //   //       foreignField: '_id',
    //   //       as: 'usersData',
    //   //     },
    //   //   },
    //   //   {
    //   //     $unwind: {
    //   //       path: 'usersData',
    //   //     },
    //   //   },
    //   //   {
    //   //     $group: {
    //   //       _id: '',
    //   //     },
    //   //   },
    //   // ]);
    //   const user = await userModel.findOne({
    //     // username: { $regex: queryOption.where.user },//模糊搜索。
    //     username: queryOption.where.user,
    //   });
    //   queryOption.where.user = user._id;
    // }

    // req.query.query = JSON.stringify(queryOption); //转回字符串

    // return next.handle();
  }
}
