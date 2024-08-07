import { Injectable } from '@nestjs/common';
import { CreateMusickDto } from './dto/create-musick.dto';
import { UpdateMusickDto } from './dto/update-musick.dto';
import { MusickRepository } from './repositroy/musicks.repositry';

@Injectable()
export class MusicksService {
  constructor( private musicksRepository:MusickRepository) {}
  create(createMusickDto: CreateMusickDto) {
    return this.musicksRepository.create(createMusickDto)
  }

  findAll() {
    return `This action returns all musicks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musick`;
  }

  update(id: number, updateMusickDto: UpdateMusickDto) {
    return `This action updates a #${id} musick`;
  }

  remove(id: number) {
    return `This action removes a #${id} musick`;
  }
}
