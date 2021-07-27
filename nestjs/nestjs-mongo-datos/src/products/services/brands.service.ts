import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  findAll() {
    return this.brandModel.find().exec();
  }

  async findOne(id: string) {
    const product = await this.brandModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return product;
  }

  create(data: CreateBrandDto) {
    return new this.brandModel(data).save();
  }

  update(id: string, changes: UpdateBrandDto) {
    const brand = this.brandModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    return brand;
  }

  remove(id: string) {
    return this.brandModel.findByIdAndRemove(id);
  }
}
