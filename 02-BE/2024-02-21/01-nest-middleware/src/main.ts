import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { Express } from 'express';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/httpException.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';
// import { LoggerFunctionMiddleware } from './middlewares/logger.function.middleware';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication<Express>>(AppModule);

  // app.use(LoggerFunctionMiddleware); //! 👈 app.use엔 "힘수형" 미들웨어만 넣을 수 있다. (즉 클래스형은 넣을 수 ❌)
  app.use(cors());
  app.useGlobalInterceptors(new TransformInterceptor()); //! 👈 또는 클래스형으로 만든 걸 "new" 생성자 함수로 만들어 넣어준다.
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(5060);
}
bootstrap();
