import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { MongooseOrderRepository } from '../repository/mongoose-order-repository';
import { OrderDocument } from '../repository/order-schema';

describe('AppController', () => {
  let mongooseOrderRepository: MongooseOrderRepository;
  let orderModel: Model<OrderDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongooseOrderRepository],
    }).compile();

    mongooseOrderRepository = module.get<MongooseOrderRepository>(
      MongooseOrderRepository,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mongooseOrderRepository).toBeDefined();
    });
  });
});
