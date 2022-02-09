import { PaymentTypeEnum } from '../types/payments-types-enum';

export class payment {
  type: PaymentTypeEnum;
  cardholder: string;
  dueDate: Date;
  value: number;
}
