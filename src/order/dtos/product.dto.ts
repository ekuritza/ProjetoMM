import { IsNumber, IsString } from 'class-validator';
export class ProductDto {
  @IsString()
  id: string;
  @IsNumber()
  price: number;
  @IsString()
  name: string;
}
