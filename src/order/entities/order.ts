import { OrderStatusEnum } from '../types/order-status-enum';
import { Payment } from './payment';
import { Product } from './product';

export class Order {
  id?: string;
  status: OrderStatusEnum;
  price: number;
  payment: Payment;
  Products: Product[];
}
