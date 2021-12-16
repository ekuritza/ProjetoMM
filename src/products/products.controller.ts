import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Products } from './entities/products';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getAll(): Promise<Products[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Products> {
    return this.productService.getById(id);
  }

  @Post()
  async create(@Body() product: Products): Promise<Products> {
    return this.productService.create(product);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() product: Products,
  ): Promise<Products> {
    product.id = id;
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
