import * as mongoose from 'mongoose';
import { orderStatusEnum } from 'src/types/order-status-enum';
import { paymentStatusEnum } from 'src/types/payments-types-enum';
import { Order } from '../entities/order';

export const OrderSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: Object.values(orderStatusEnum),
    },
    price: Number,
    payment: {
      paymentStatus: {
        type: String,
        enum: Object.values(paymentStatusEnum),
      },
      cardholder: String,
      dueDate: Date,
      value: Number,
    },
    products: [
      {
        id: String,
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
