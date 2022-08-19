import { PaymentTypeEnum } from '../types/payments-types-enum';

export class Payment {
  type: PaymentTypeEnum;
  cardholder: string;
  dueDate: Date;
  value: number;
}
