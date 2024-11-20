import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';

@Module({
  controllers: [CarsController],
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
})
export class CarsModule {}
