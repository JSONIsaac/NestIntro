import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
            year: 2019,
            price: 20000
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic',
            year: 2018,
            price: 25000
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Fusion',
            year: 2017,
            price: 30000
        }
    ]

    findAll(){
        return this.cars;
    }

    findByOneId(id2: number){
        const car = this.cars.find(car => car.id === id2);

        return car
    }

}
