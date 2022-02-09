import { PaymentTypeEnum } from '../types/payments-types-enum';

export class PaymentDto {
  cardholder: string;
  paymentStatus: PaymentTypeEnum;
  value: number;
  dueDate: Date;
}
