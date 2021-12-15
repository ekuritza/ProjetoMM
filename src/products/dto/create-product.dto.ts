import { StatusEnum } from '../types/status-enum';

export class CreateProductDto {
  id: string;
  name: string;
  price: number;
  stock: number;
  status: StatusEnum;
  createdAt: FormData;
  updatedAt: FormData;
}
