import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Artist } from "../entities/artist.entity";
import { Repository } from "typeorm";
import { CreateArtistDto } from "../dto/create-artist.dto";
@Injectable()
export class ArtistsRepository {
    constructor(@InjectRepository(Artist) private readonly artistsRepository:Repository<Artist>){}
    async create(createArtistDto:CreateArtistDto){
        const newArtist = await this.artistsRepository
        .createQueryBuilder()
        .insert()
        .into(Artist)
        .values({
            name: createArtistDto.name,
            biography: createArtistDto.biography
        })
        return newArtist
    }
    async findOne(id:string){
        return this.artistsRepository
        .createQueryBuilder('artist')
        .where('artist.id = :id', {id})
        .getOne()
    }
}