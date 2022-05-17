import { Injectable, Param } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Commodity } from 'libs/db/models/commodity.model';
import { Shop } from 'libs/db/models/shop.model';
import { InjectModel } from 'nestjs-typegoose-next';

@Injectable()
export class CommoditysService {}
