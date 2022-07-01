import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
} from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Shop } from 'libs/db/models/shop.model';
import { InjectModel } from 'nestjs-typegoose-next';

@Injectable()
export class ShopsService {
  //寻找同一用户下的shop
  constructor(
    @InjectModel(Shop) private readonly model: ReturnModelType<typeof Shop>,
  ) {}
  public MODEL = this.model;

  // public async shops(@Param('id') id: string) {
  //   const user = { id };
  //   const res = await this.model.find({ user: id });
  //   if (!res) {
  //     throw new BadRequestException('商铺名已注册');
  //   }
  //   // console.log(res);

  //   // return res;
  // }
}
