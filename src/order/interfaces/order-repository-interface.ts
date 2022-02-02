import { DeleteResult } from 'mongodb';
import { CreateOrderDto } from '../dto/order.dto';
import { Order } from '../entities/order';

export interface OrderRepositoryInterface {
  create(createOrderDto: CreateOrderDto): Promise<Order>;
  findAll(): Promise<Order[]>;
  getById(id: string): Promise<Order>;
  update(id: string, order: CreateOrderDto): Promise<Order>;
  delete(id: string): Promise<DeleteResult>;
}
