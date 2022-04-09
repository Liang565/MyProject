import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose-next';
import { models } from './model-list';

const model = TypegooseModule.forFeature(models);
@Global() //全局配置
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: 'mongodb://localhost/blogs',
        };
      },
    }),
    model,
  ],
  providers: [DbService],
  exports: [DbService, model],
})
export class DbModule {}
