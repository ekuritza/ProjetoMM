import { Injectable } from '@nestjs/common';
import { Products } from './entities/products';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Products>,
  ) {}
  async getAll() {
    return await this.productModel.find().exec();
  }

  async getById(id: string) {
    return await this.productModel.findById(id).exec();
  }

  async create(product: Products) {
    const createProduct = new this.productModel(product);
    return await createProduct.save();
  }

  async update(id: string, product: Products) {
    await this.productModel.updateOne({ _id: id }, product).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return this.productModel.deleteOne({ _id: id }).exec();
  }
}
