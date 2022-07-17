import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Components } from 'libs/db/models/components.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';

@Crud({
  model: Components,
})
@Controller('components')
@ApiTags('组件')
export class ComponentsController {
  constructor(
    @InjectModel(Components)
    private readonly model: ReturnModelType<typeof Components>,
  ) {}
}
