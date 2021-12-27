import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { StatusEnum } from '../types/status-enum';

export class CreateProductDto {
  id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  @IsNotEmpty()
  stock: number;
  status: StatusEnum;
}
