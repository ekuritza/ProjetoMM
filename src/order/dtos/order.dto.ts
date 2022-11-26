import { IsArray, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { OrderStatusEnum } from '../types/order-status-enum';
import { PaymentDto } from './payment.dto';
import { ProductDto } from './product.dto';

export class CreateOrderDto {
  @IsEnum(OrderStatusEnum, {
    message: `$property must be one of these: ${Object.keys(OrderStatusEnum)}`,
  })
  status: OrderStatusEnum;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  payment: PaymentDto;
  @IsArray()
  products: ProductDto[];
  //so pra atualizar
}
