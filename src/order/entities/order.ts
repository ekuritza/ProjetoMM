import { OrderStatusEnum } from '../types/order-status-enum';
import { Document } from 'mongoose';
import { PaymentStatusEnum } from '../types/payments-types-enum';

export interface Order extends Document {
  id?: string;
  status: OrderStatusEnum;
  price: number;
  payment: {
    type: PaymentStatusEnum;
    cardholder: string;
    dueDate: Date;
    value: number;
  };
  products: [
    {
      id: string;
      price: number;
      name: string;
    },
  ];
}
