import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 9999);
}
bootstrap();
