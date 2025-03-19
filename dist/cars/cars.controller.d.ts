import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): {
        id: number;
        brand: string;
        model: string;
        year: number;
        price: number;
    }[];
    getCarById(id: number): {
        id: number;
        brand: string;
        model: string;
        year: number;
        price: number;
    } | undefined;
    createCar(body: any): any;
    updateCar(id: number, body: any): any;
    deleteCar(id: number): {
        method: string;
        id: number;
    };
}
