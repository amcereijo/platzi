import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';
import {
  CreateProductDto,
  FilterProductsDto,
  UpdateProductDto,
} from './../dtos/products.dtos';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll(params?: FilterProductsDto) {
    if (params) {
      const { limit, offset, minPrice, maxPrice } = params;
      const filters: FilterQuery<Product> = {};

      if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }

      return this.productModel
        .find(filters)
        .skip(offset)
        .limit(limit)
        .populate('brand')
        .exec();
    }

    return this.productModel.find().populate('brand').exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  async create(data: CreateProductDto) {
    const newProduct = await new this.productModel(data).save();
    return newProduct;
  }

  async update(id: string, changes: UpdateProductDto) {
    const product = this.productModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found!`);
    }

    return product;
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
