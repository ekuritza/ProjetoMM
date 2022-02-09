import { Inject } from '@nestjs/common';
import { DeleteResult } from 'mongodb';
import { CreateOrderDto } from '../dtos/order.dto';
import { Order } from '../entities/order';
import { OrderRepositoryInterface } from '../interfaces/order-repository-interface';
import { MongooseOrderRepository } from './mongoose-order-repository';

export class MongooseOrderRepositoryAdapter
  implements OrderRepositoryInterface
{
  constructor(
    @Inject('MongooseOrderRepository')
    private readonly orderRepository: MongooseOrderRepository,
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
