import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from 'mongoose';
import { CreateOrderDto } from '../dtos/order.dto';
import { Order } from '../entities/order';

@Injectable()
export class MongooseOrderRepository {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}
  async create(order: CreateOrderDto) {
    const createOrder = new this.orderModel(order);
    return await createOrder.save();
  }
  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }
  async getById(id: string): Promise<Order> {
    return await this.orderModel.findById(id).exec();
  }

  async update(id: string, order: CreateOrderDto) {
    await this.orderModel.updateOne({ _id: id }, order).exec();
    return this.getById(id);
  }
  async delete(id: string): Promise<DeleteResult> {
    return this.orderModel.deleteOne({ _id: id }).exec();
  }
}
