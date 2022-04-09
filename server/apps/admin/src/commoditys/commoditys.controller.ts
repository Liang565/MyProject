import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Commodity } from 'libs/db/models/commodity.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { UsersService } from '../users/users.service';

@Crud({
  model: Commodity,
})
@Controller('commoditys')
@ApiTags('商品')
export class CommoditysController {
  constructor(
    @InjectModel(Commodity)
    private readonly model: ReturnModelType<typeof Commodity>,
  ) {}
}
