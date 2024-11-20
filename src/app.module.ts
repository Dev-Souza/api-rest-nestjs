import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars/entities/car.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: String(process.env.DB_PASSWORD),
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [Car],
      synchronize: true
    }),
    CarsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }