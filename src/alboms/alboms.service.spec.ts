import { Test, TestingModule } from '@nestjs/testing';
import { AlbomsService } from './alboms.service';

describe('AlbomsService', () => {
  let service: AlbomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbomsService],
    }).compile();

    service = module.get<AlbomsService>(AlbomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
