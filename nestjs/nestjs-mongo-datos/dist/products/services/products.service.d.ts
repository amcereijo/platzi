import { Product } from './../entities/product.entity';
import { CreateProductDto, FilterProductsDto, UpdateProductDto } from './../dtos/products.dtos';
import { Model } from 'mongoose';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    findAll(params?: FilterProductsDto): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(data: CreateProductDto): Promise<Product>;
    update(id: string, changes: UpdateProductDto): Promise<Product>;
    remove(id: string): import("mongoose").Query<Product, Product, {}>;
}
