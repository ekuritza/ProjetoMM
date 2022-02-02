import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { orderStatusEnum } from 'src/types/order-status-enum';

export class CreateOrderDto {
  @IsEnum(orderStatusEnum, {
    message: `$property must be one of these: ${Object.keys(orderStatusEnum)}`,
  })
  status: orderStatusEnum;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  payment: {
    cardholder: string;
    paymentStatus: string;
    value: number;
    dueDate: Date;
  };
}
