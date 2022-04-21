import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Shop } from 'libs/db/models/shop.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';
import { ShopDto } from '../auth/dto/shop.dto';

@Crud({
  model: Shop,
})
@Controller('shops')
@ApiTags('商铺')
export class ShopsController {
  constructor(
    @InjectModel(Shop) private readonly model: ReturnModelType<typeof Shop>,
  ) {}
  //注册的路径：习惯用register
  @Post('addShop')
  @ApiOperation({ summary: '新增店铺' })
  //@Body()  dto从客户端传上来的参数
  async add(@Body() dto: ShopDto) {
    //表示传入的Dto是一个RegisterDto类型
    const { title, user, description, images, address, phone, components } =
      dto; //结构出dto里面的参数

    if (title == '' || user == '' || !title || !user) {
      throw new BadRequestException('用户名或者密码为空');
    }
    const res = await this.model.findOne({ title }); //找同名的
    if (!res) {
      const shop = await this.model.create({
        title,
        user,
        description,
        images,
        address,
        phone,
        components,
      });
      return shop;
    } else {
      throw new BadRequestException('商铺名已注册');
    }
  }
}
