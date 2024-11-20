import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [];
  private id = 1;

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: this.id,
      brand: createCarDto.brand,
      model: createCarDto.model,
      year: createCarDto.year
    }
    this.id = this.id + 1;

    this.cars.push(newCar);
    return newCar;
  }

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const carSearch = this.cars.find(item => item.id == id)
    if (!carSearch) {
      throw new NotFoundException('Carro não encontrado!');
    }
    return carSearch;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    const carSearch = this.findOne(id);

    carSearch.brand = updateCarDto.brand;
    carSearch.model = updateCarDto.model;
    carSearch.year = updateCarDto.year;

    return carSearch;
  }

  remove(id: number) {
    const carSearch = this.findOne(id);

    const carIndex = this.cars.findIndex(item => item.id == id);

    this.cars.splice(carIndex, 1);
    return `Carro removido com sucesso!`;
  }
}
