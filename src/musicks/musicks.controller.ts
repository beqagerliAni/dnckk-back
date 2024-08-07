import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicksService } from './musicks.service';
import { CreateMusickDto } from './dto/create-musick.dto';
import { UpdateMusickDto } from './dto/update-musick.dto';
import { Roles } from 'src/auth/guard/guardd.key';
import { RoleEnum } from 'src/auth/guard/enum/role.enum';

@Controller('musicks')
export class MusicksController {
  constructor(private readonly musicksService: MusicksService) {}

  @Roles(RoleEnum.User)
  @Post()
  create(@Body() createMusickDto: CreateMusickDto) {
    return this.musicksService.create(createMusickDto);
  }

  @Get()
  findAll() {
    return this.musicksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusickDto: UpdateMusickDto) {
    return this.musicksService.update(+id, updateMusickDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicksService.remove(+id);
  }
}
