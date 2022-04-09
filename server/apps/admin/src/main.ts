import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  app.enableCors(); //配置跨域
  app.setGlobalPrefix('/admin/api'); //接口上加上api
  const options = new DocumentBuilder()
    .setTitle('电商API')
    .setDescription('供后端使用的API文档')
    .setVersion('1.0')
    .addBearerAuth() //启 用token，给swagger用的
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
  console.log('http://localhost:3001/api-docs/');
}
bootstrap();
