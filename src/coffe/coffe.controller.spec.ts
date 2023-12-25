import { Test, TestingModule } from '@nestjs/testing';
import { CoffeController } from './coffe.controller';
import { CoffeService } from './coffe.service';

describe('CoffeController', () => {
  let controller: CoffeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeController],
      providers: [CoffeService],
    }).compile();

    controller = module.get<CoffeController>(CoffeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
