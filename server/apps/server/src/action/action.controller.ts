import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';
import { get } from 'http';
import { Action } from 'libs/db/models/action.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { ObjectUnsubscribedError } from 'rxjs';
import { JwtAuth } from '../auth/auth.decorator';
import { CurrentUserId } from '../auth/current-user';
import { ActionService } from './action.service';
import { Commodity } from 'libs/db/models/commodity.model';
// @Crud({
//   model: Action,
//   routes: {
//     find: {
//       populate: ['object', 'user', 'type'],
//     },
//   },
// })
@ApiTags('操作')
@Controller('action')
@JwtAuth()
export class ActionController {
  constructor(
    @InjectModel(Action)
    private readonly model: ReturnModelType<typeof Action>,
    private service: ActionService,
    @InjectModel(Commodity)
    private readonly CommodityModel: ReturnModelType<typeof Commodity>,
  ) {}
  @ApiOperation({ summary: '收藏' })
  // collect/:模型/:目标id/:操作
  @Get('collect/:type/:objectId/:action')
  async collect(
    @CurrentUserId() userid,
    @Param('type') type,
    @Param('objectId') objectId,
    @Param('action') action,
  ) {
    const res = await this.service.collect(userid, action, type, objectId);
    return res;
  }

  //获取是否收藏
  @ApiOperation({ summary: '收藏' })
  // collect/:模型/:目标id/:操作
  @Get('getCollect/:type/:objectId/:action')
  async getCollect(
    @CurrentUserId() userid,
    @Param('type') type,
    @Param('objectId') objectId,
    @Param('action') action,
  ) {
    const res = await this.service.getCollect(userid, action, type, objectId);
    return res;
  }

  @ApiOperation({ summary: '获取操作' })
  // collect/:模型/:目标id/:操作
  @Get('getMyAction/:action')
  async getMyCollect(@CurrentUserId() userid, @Param('action') action) {
    const res = await this.service.getMyAction(userid, action);
    return res;
  }

  @ApiOperation({ summary: '搜索' })
  @Post('searchMyAction/:action')
  async search23(
    @Body() body,
    @CurrentUserId() userid,
    @Param('action') action,
  ) {
    let returnRes = [];
    const res: any = await this.service.getMyAction(userid, action);
    const goodModel = getModelForClass(Commodity); //获取模型

    const res1 = await goodModel.find({
      commodityName: { $regex: body.commodityName },
    });

    for (let i in res) {
      for (let k in res1) {
        if (res[i].object.commodityName === res1[k].commodityName) {
          returnRes.push(res[i]);
        }
      }
    }
    return returnRes;
  }
}
