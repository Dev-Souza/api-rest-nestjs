import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: 'http://localhost:3000', // Permite a origem do front-end
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }),
  );
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
