import { Test, TestingModule } from '@nestjs/testing';
import { AlbomsController } from './alboms.controller';
import { AlbomsService } from './alboms.service';

describe('AlbomsController', () => {
  let controller: AlbomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbomsController],
      providers: [AlbomsService],
    }).compile();

    controller = module.get<AlbomsController>(AlbomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
