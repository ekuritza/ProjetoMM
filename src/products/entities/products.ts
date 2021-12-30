import { Document } from 'mongoose';
import { StatusEnum } from '../types/status-enum';
export class Products extends Document {
  name: string;
  price: number;
  stock: number;
  status: StatusEnum;
}
