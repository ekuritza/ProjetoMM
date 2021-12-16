import { Document } from 'mongoose';
export class Products extends Document {
  name: string;
  price: number;
  stock: number;
  status: string;
}
