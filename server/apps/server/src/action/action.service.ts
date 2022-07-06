import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Action } from 'libs/db/models/action.model';
import { InjectModel } from 'nestjs-typegoose-next';

@Injectable()
export class ActionService {
  constructor(
    @InjectModel(Action) private readonly model: ReturnModelType<typeof Action>,
  ) {}
  /**
   *
   * @param userid 用户id
   * @param action 操作
   * @param type 模型
   * @param objectid 目标id
   * @returns 是否收藏
   */
  public async collect(userid, action, type, objectid) {
    const collect = await this.model.findOne({
      user: userid,
      action,
      type,
      object: objectid,
    });
    //如果存在collect，就执行取消收藏
    if (collect) {
      await this.model.findByIdAndDelete({ _id: collect._id });
      return false;
    }
    //不存在collect，就执行收藏

    await this.model.create({
      user: userid,
      action,
      type,
      object: objectid,
    });
    return true;
  }
  /**
   *
   * @param userid 用户id
   * @param action 操作
   * @param type 模型
   * @param objectid 目标id
   * @returns 是否收藏
   */
  public async getCollect(userid, action, type, objectid) {
    const collect = await this.model.findOne({
      user: userid,
      action,
      type,
      object: objectid,
    });
    if (collect) {
      return true;
    }
    return false;
  }
  /**
   *
   * @param uid 用户id
   * @param action 操作类型
   * @returns 获取用户所以操作
   */
  public async getMyAction(uid, action?) {
    const res = await this.model
      .find({ user: uid, action })
      .populate('object')
      .sort({ _id: -1 });
    return res;
  }
}
