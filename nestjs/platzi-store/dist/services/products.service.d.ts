import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
export declare class ProductsService {
    private counterId;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(payload: CreateProductDto): {
        name: string;
        price: number;
        description: string;
        stock: number;
        image: string;
        id: number;
    };
    delete(id: number): Product[];
    updateOne(id: number, payload: UpdateProductDto): Product;
}
