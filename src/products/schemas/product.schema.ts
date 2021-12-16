import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    status: String,
  },
  {
    timestamps: true,
  },
);
