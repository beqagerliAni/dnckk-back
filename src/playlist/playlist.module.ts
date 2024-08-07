import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { PLaylistRepository } from './repository/playlist.repositoy';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist])],  
  controllers: [PlaylistController],
  providers: [PlaylistService,PLaylistRepository],
})
export class PlaylistModule {}
