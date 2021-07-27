import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product1',
      description: 'Description 1',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p: Product) => p.id === id);

    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    const newProduct = {
      id: ++this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  delete(id: number) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index < 0) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    this.products.splice(index, 1);
    return this.products;
  }

  updateOne(id: number, payload: UpdateProductDto) {
    const index = this.products.findIndex((p) => p.id === id);

    if (index < 0) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    this.products[index] = {
      ...this.products[index],
      ...payload,
    };
    return this.products[index];
  }
}
