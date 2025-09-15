import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CHAT_PORT } from './constants';
import { WsAdapter } from '@nestjs/platform-ws';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(CHAT_PORT);
}
bootstrap();
