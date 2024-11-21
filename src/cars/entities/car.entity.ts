import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cars'})
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text')
    brand: string;
    @Column('text')
    model: string;
    @Column('int')
    year: number;
    @Column({ nullable: true })
    imagem_carro: string;
}
