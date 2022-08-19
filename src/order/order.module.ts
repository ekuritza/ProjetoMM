import { Module } from '@nestjs/common';
import { OrderService } from './order-service';
import { OrderController } from './order.controller';
import { OrderSchema } from './repository/order-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseOrderRepository } from './repository/mongoose-order-repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    {
      provide: 'OrderRepositoryInterface',
      useClass: MongooseOrderRepository,
    },
    {
      provide: 'OrderInterface',
      useClass: OrderService,
    },
  ],
})
export class OrderModule {}
