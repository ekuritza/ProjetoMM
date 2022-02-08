import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Order } from '../entities/order';
import { MongooseOrderRepository } from '../repository/mongoose-order-repository';
import { OrderDocument } from '../repository/order-schema';

describe('MongooseOrderRepository', () => {
  let mongooseOrderRepository: MongooseOrderRepository;
  let orderModel: Model<OrderDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MongooseOrderRepository,
        {
          provide: getModelToken(Order.name),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    mongooseOrderRepository = module.get<MongooseOrderRepository>(
      MongooseOrderRepository,
    );
    orderModel = module.get<Model<OrderDocument>>(getModelToken(Order.name));
  });
});
