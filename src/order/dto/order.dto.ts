import { IsArray, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { OrderStatusEnum } from '../types/order-status-enum';
import { PaymentStatusEnum } from '../types/payments-types-enum';

export class CreateOrderDto {
  @IsEnum(OrderStatusEnum, {
    message: `$property must be one of these: ${Object.keys(OrderStatusEnum)}`,
  })
  status: OrderStatusEnum;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  payment: {
    cardholder: string;
    paymentStatus: PaymentStatusEnum;
    value: number;
    dueDate: Date;
  };
  @IsArray()
  products: [
    {
      price: number;
      name: string;
    },
  ];
}
