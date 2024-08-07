import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PLaylistRepository } from './repository/playlist.repositoy';

@Injectable()
export class PlaylistService {
  constructor(private playlistRepository:PLaylistRepository){}
  create(createPlaylistDto: CreatePlaylistDto) {
    return this.playlistRepository.create(createPlaylistDto)
  }
  findAll() {
    return this.playlistRepository.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} playlist`;
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
