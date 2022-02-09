import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateOrderDto } from './dtos/order.dto';
import { Order } from './entities/order';
import { OrderInterface } from './interfaces/order-service.interface';

@Controller('order')
export class OrderController {
  constructor(
    @Inject('OrderInterface')
    private readonly orderservice: OrderInterface,
  ) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderservice.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderservice.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Order> {
    return this.orderservice.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() order: CreateOrderDto,
  ): Promise<Order> {
    return this.orderservice.update(id, order);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.orderservice.delete(id);
  }
}
