import { Module } from '@nestjs/common';
import { AlbomsService } from './alboms.service';
import { AlbomsController } from './alboms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albom } from './entities/albom.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Albom])],
  controllers: [AlbomsController],
  providers: [AlbomsService],
})
export class AlbomsModule {}
