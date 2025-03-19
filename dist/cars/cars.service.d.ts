export declare class CarsService {
    private cars;
    findAll(): {
        id: number;
        brand: string;
        model: string;
        year: number;
        price: number;
    }[];
    findByOneId(id2: number): {
        id: number;
        brand: string;
        model: string;
        year: number;
        price: number;
    } | undefined;
}
