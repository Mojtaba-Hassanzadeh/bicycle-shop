import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
