import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose-next';
import { models } from './model-list';
import { setGlobalOptions } from '@typegoose/typegoose';

setGlobalOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true },
  },
});
const model = TypegooseModule.forFeature(models);
@Global() //全局配置
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: 'mongodb://localhost:27018/blogs',
        };
      },
    }),
    model,
  ],
  providers: [DbService],
  exports: [DbService, model],
})
export class DbModule {}
