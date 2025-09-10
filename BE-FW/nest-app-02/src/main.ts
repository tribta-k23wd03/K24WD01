import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT, AUTH_MS_HOST, AUTH_MS_PORT } from './constants';
import { Logger, ValidationPipe } from '@nestjs/common';
import '@nestjs/microservices';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: AUTH_MS_HOST, port: AUTH_MS_PORT },
  });

  await app.startAllMicroservices();
  await app.listen(APP_PORT);

  Logger.log(
    `TCP microservice listening on tcp://${AUTH_MS_HOST}:${AUTH_MS_PORT}`,
    `Bootstrap`,
  );
  Logger.log(
    `HTTP server listening on http://localhost:${APP_PORT}`,
    `Bootstrap`,
  );
}
bootstrap();
