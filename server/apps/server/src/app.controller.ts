import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  //UseInterceptors 拦截器 请求或者响应的中间穿插操作都需要使用拦截器
  //FileInterceptor 文件拦截 器
  //file从前端取得的字段名
  //@UploadedFile()取文件 同时传入文件名
  @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(@UploadedFile('file') file) {
  async upload(@UploadedFile('file') file) {
    return file;
  }
}
