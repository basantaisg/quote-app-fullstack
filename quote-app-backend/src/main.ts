import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS
  app.enableCors({
    origin: 'http://localhost:5173', // allow only your Vite frontend
    credentials: true, // allow cookies if needed
  });

  await app.listen(3000);
}
bootstrap();
