import * as mongoose from 'mongoose';
import { OrderStatusEnum } from '../types/order-status-enum';
import { PaymentStatusEnum } from '../types/payments-types-enum';
import { Order } from '../entities/order';

export const OrderSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: Object.values(OrderStatusEnum),
    },
    price: Number,
    payment: {
      paymentStatus: {
        type: String,
        enum: Object.values(PaymentStatusEnum),
      },
      cardholder: String,
      dueDate: Date,
      value: Number,
    },
    products: [
      {
        price: Number,
        name: String,
      },
    ],
  },

  {
    timestamps: true,
  },
);
export type OrderDocument = Order & mongoose.Document;
