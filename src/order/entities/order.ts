import { OrderStatusEnum } from '../types/order-status-enum';
import { payment } from './payment';
import { product } from './product';

export class Order {
  id?: string;
  status: OrderStatusEnum;
  price: number;
  payment: payment;
  products: product[];
}
