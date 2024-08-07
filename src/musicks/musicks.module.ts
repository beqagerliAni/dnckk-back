import { Module } from '@nestjs/common';
import { MusicksService } from './musicks.service';
import { MusicksController } from './musicks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musick } from './entities/musick.entity';
import { MusickRepository } from './repositroy/musicks.repositry';

@Module({
  imports: [TypeOrmModule.forFeature([Musick])],
  controllers: [MusicksController],
  providers: [MusicksService,MusickRepository],
})
export class MusicksModule {}
