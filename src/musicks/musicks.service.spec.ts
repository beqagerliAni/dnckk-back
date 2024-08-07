import { Test, TestingModule } from '@nestjs/testing';
import { MusicksService } from './musicks.service';

describe('MusicksService', () => {
  let service: MusicksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicksService],
    }).compile();

    service = module.get<MusicksService>(MusicksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
