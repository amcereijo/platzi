import { ProductsService } from './../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(limit?: number, offset?: number, brand?: string): import("../entities/product.entity").Product[];
    getProductFilter(id: number): import("../entities/product.entity").Product;
    getOne(id: number): import("../entities/product.entity").Product;
    create(payload: CreateProductDto): {
        name: string;
        price: number;
        description: string;
        stock: number;
        image: string;
        id: number;
    };
    update(id: number, payload: UpdateProductDto): import("../entities/product.entity").Product;
    remove(id: number): number;
}
