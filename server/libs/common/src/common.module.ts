import { Global, Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { JwtModule } from '@nestjs/jwt';
@Global() //注意标记为全局
@Module({
  imports: [
    //这块
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: 'sifhgioaehgbb',
        };
      },
    }),
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule],
})
export class CommonModule {}
