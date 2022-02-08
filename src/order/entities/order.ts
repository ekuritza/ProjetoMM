import { OrderStatusEnum } from '../types/order-status-enum';
import { PaymentStatusEnum } from '../types/payments-types-enum';

export class Order {
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
