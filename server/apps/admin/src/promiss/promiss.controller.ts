import { Controller } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Promiss } from 'libs/db/models/promiss.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose-next';

@Crud({
  model: Promiss,
})
@Controller('promiss')
export class PromissController {
  constructor(
    @InjectModel(Promiss)
    private readonly model: ReturnModelType<typeof Promiss>,
  ) {}
}
