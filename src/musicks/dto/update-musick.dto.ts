import { PartialType } from '@nestjs/mapped-types';
import { CreateMusickDto } from './create-musick.dto';

export class UpdateMusickDto extends PartialType(CreateMusickDto) {}
