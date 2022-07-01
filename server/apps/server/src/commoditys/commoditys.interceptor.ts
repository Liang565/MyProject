import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';
import { Commodity } from 'libs/db/models/commodity.model';
import { Observable } from 'rxjs';

@Injectable()
export class CommoditysInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    //Observable<any>同步

    const req = context.switchToHttp().getRequest();
    console.log('拦截器拦截');
    console.log(req.query);
    const { query } = req.query; //解构出query
    let queryOption = JSON.parse(query); //字符串转回对象
    console.log(queryOption);
    //模糊查询商品名，这里不需要用到拦截器！
    if (queryOption?.where?.commodityName) {
      const goodModel = getModelForClass(Commodity); //获取模型
      // const good = await goodModel.findOne({
      //   commodityName: { $regex: queryOption.where.commodityName },
      // });
      const goods = await goodModel.find({
        commodityName: { $regex: queryOption.where.commodityName },
      });
      // queryOption.where.commodityName = goods.commodityName;
      console.log('模糊查询后');
      console.log(goods);
      let a = [];
      for (const i in goods) {
        a[i] = goods[i].commodityName;
      }
      console.log(a);
      const goo = await goodModel.find({
        commodityName: { $in: a },
      });

      // for(const i in goods){
      //   console.log(i._id);

      // }
      // console.log(queryOption);
    }
    return next.handle();
  }
}
