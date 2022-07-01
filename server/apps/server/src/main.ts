import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //配置跨域
  app.setGlobalPrefix('/server/api'); //接口上加上api

  const options = new DocumentBuilder()
    .setTitle('后台管理API')
    .setDescription('API文档')
    .setVersion('1.0')
    .addBearerAuth() //启 用token，给swagger用的
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const PROT = process.env.APP_PROT;

  await app.listen(PROT);
  console.log(`http://localhost:${PROT}/api-docs`);

  // console.log(`http://localhost:3002/api-docs`);
}
bootstrap();
