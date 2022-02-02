import * as mongoose from 'mongoose';
import { StatusEnum } from '../../types/status-enum';

export const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    status: {
      type: String,
      enum: Object.values(StatusEnum),
    },
  },
  {
    timestamps: true,
  },
);
