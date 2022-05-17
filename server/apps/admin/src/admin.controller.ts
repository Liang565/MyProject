import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('upload')
  //UseInterceptors 拦截器 请求或者响应的中间穿插操作都需要使用拦截器
  //FileInterceptor 文件拦截 器
  //file从前端取得的字段名
  //@UploadedFile()取文件 同时传入文件名
  @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(@UploadedFile('file') file) {
  async upload(@UploadedFile('file') file) {
    console.log(file);

    return file;
  }
}
