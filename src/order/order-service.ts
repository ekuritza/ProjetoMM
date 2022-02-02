import { Injectable, Inject } from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { Order } from './entities/order';
import { OrderInterface } from './interfaces/order-service.interface';
import { OrderRepositoryInterface } from './interfaces/order-repository-interface';
import { DeleteResult } from 'mongodb';
import { Product } from 'src/products/entities/products';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService implements OrderInterface {
  constructor(
    @Inject('OrderRepositoryInterface')
    private readonly orderRepository: OrderRepositoryInterface,
    //@InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }
  async getById(id: string): Promise<Order> {
    return this.orderRepository.getById(id);
  }

  async update(id: string, order: CreateOrderDto): Promise<Order> {
    return this.orderRepository.update(id, order);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.orderRepository.delete(id);
  }
}
