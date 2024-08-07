import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Musick } from "../entities/musick.entity";
import { Repository } from "typeorm";
import { CreateMusickDto } from "../dto/create-musick.dto";
import { retry } from "rxjs";
import { Public } from "src/auth/guard/key.publick";
import { Roles } from "src/auth/guard/guardd.key";
import { RoleEnum } from "src/auth/guard/enum/role.enum";
@Injectable()
export class MusickRepository {
    constructor(@InjectRepository(Musick) private musickRepository:Repository<Musick>) {}
    @Roles(RoleEnum.User)
    async create(createMusickDto:CreateMusickDto){
        const newMusick =  this.musickRepository.create(createMusickDto)
        return this.musickRepository.save(newMusick)   
    }
}