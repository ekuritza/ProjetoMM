import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { Product } from './entities/products';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/product.dto';
import { DeleteResult } from 'mongodb';
@Injectable()
export class ProductsService {
  private readonly logger: Logger;
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {
    this.logger = new Logger();
  }
  async getAll() {
    return await this.productModel.find().exec();
  }

  async getById(id: string) {
    return await this.productModel.findById(id).exec();
  }

  async create(product: CreateProductDto) {
    if (product.price < 0 || product.price === 0) {
      this.logger.error('below the agreed upon price');
      throw new BadRequestException('below the agreed upon price');
    }
    if (product.stock < 0 || product.stock === 0) {
      this.logger.error('out of stock');
      throw new BadRequestException('out of stock');
    }
    const createProduct = new this.productModel(product);
    return await createProduct.save();
  }

  async update(id: string, product: CreateProductDto) {
    await this.productModel.updateOne({ _id: id }, product).exec();
    return this.getById(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.productModel.deleteOne({ _id: id }).exec();
  }
}
