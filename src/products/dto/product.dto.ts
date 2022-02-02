import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { StatusEnum } from '../../types/status-enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Product name', example: 'Desk' })
  name: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  @IsNotEmpty()
  stock: number;
  @IsEnum(StatusEnum, {
    message: `$property must be one of these: ${Object.keys(StatusEnum)}`,
  })
  status: StatusEnum;
}
