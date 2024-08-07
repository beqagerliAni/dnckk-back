import { Injectable } from '@nestjs/common';
import { CreateAlbomDto } from './dto/create-albom.dto';
import { UpdateAlbomDto } from './dto/update-albom.dto';

@Injectable()
export class AlbomsService {
  create(createAlbomDto: CreateAlbomDto) {
    return 'This action adds a new albom';
  }

  findAll() {
    return `This action returns all alboms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} albom`;
  }

  update(id: number, updateAlbomDto: UpdateAlbomDto) {
    return `This action updates a #${id} albom`;
  }

  remove(id: number) {
    return `This action removes a #${id} albom`;
  }
}
