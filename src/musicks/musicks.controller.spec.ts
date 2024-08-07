import { Test, TestingModule } from '@nestjs/testing';
import { MusicksController } from './musicks.controller';
import { MusicksService } from './musicks.service';

describe('MusicksController', () => {
  let controller: MusicksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicksController],
      providers: [MusicksService],
    }).compile();

    controller = module.get<MusicksController>(MusicksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
