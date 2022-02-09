import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { PaymentTypeEnum } from '../types/payments-types-enum';

export class PaymentDto {
  @IsString()
  cardholder: string;
  @IsEnum(PaymentTypeEnum, {
    message: `$property must be one of these: ${Object.keys(PaymentTypeEnum)}`,
  })
  paymentStatus: PaymentTypeEnum;
  @IsNumber()
  value: number;
  @IsDate()
  dueDate: Date;
}
