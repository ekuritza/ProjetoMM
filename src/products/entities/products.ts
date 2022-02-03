import { Document } from 'mongoose';
import { StatusEnum } from '../types/status-enum';
export class Product extends Document {
  name: string;
  price: number;
  stock: number;
  status: StatusEnum;
}
