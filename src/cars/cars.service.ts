import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>
  ) { }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = {
      brand: createCarDto.brand,
      model: createCarDto.model,
      year: createCarDto.year,
      imagem_carro: createCarDto.imagem_carro
    }
    const newCar = await this.carRepository.save(car);
    return newCar;
  }

  async findAll() {
    return await this.carRepository.find();
  }

  async findOne(id: number): Promise<Car> {
    const carSearch = await this.carRepository.findOne({ where: { id } });
    if (!carSearch) {
      throw new NotFoundException('Carro não encontrado!');
    }
    return carSearch;
  }

  async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
    const carSearch = await this.findOne(id);
    Object.assign(carSearch, updateCarDto);
    return await this.carRepository.save(carSearch);
  }

  async remove(id: number): Promise<void> {
    const carSearch = await this.findOne(id);
    await this.carRepository.remove(carSearch)
  }
}
