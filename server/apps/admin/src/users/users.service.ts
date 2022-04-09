import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from 'libs/db/models/user.model';
import { InjectModel } from 'nestjs-typegoose-next';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
  ) {}

  /**
   *
   * @param model 新建对象
   * @returns 创建数据
   */
  public async create(model: Object) {
    const data = await this.model.create(model);
    return data;
  }
}
