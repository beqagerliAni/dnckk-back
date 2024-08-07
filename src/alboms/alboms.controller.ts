import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlbomsService } from './alboms.service';
import { CreateAlbomDto } from './dto/create-albom.dto';
import { UpdateAlbomDto } from './dto/update-albom.dto';

@Controller('alboms')
export class AlbomsController {
  constructor(private readonly albomsService: AlbomsService) {}

  @Post()
  create(@Body() createAlbomDto: CreateAlbomDto) {
    return this.albomsService.create(createAlbomDto);
  }

  @Get()
  findAll() {
    return this.albomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbomDto: UpdateAlbomDto) {
    return this.albomsService.update(+id, updateAlbomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albomsService.remove(+id);
  }
}
