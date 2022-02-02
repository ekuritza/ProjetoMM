import { orderStatusEnum } from 'src/types/order-status-enum';
import { Document } from 'mongoose';

export interface Order extends Document {
  id?: string;
  status: orderStatusEnum;
  price: number;
  payment: {
    type: string;
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
