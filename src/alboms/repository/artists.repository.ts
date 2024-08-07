import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Albom } from "../entities/albom.entity";
import { Repository } from "typeorm";
import { CreateAlbomDto } from "../dto/create-albom.dto";
import { Artist } from "../../artists/entities/artist.entity";

@Injectable()
export class AlbomsRepository {
    constructor(@InjectRepository(Albom) private ablomsRepository:Repository<Albom> ){}
    async create(createAlbomDto:CreateAlbomDto){
        const newAlbom = new Albom()
        newAlbom.imgUrl = createAlbomDto.imgUrl
        newAlbom.title = createAlbomDto.title
        const arrayOfArtist = []
        
        for(const artistId of createAlbomDto.artistIds) {
            const newArtist = new Artist()
            newArtist.id = artistId
            await arrayOfArtist.push(newAlbom)
        }
        newAlbom.artists = arrayOfArtist
        return await this.ablomsRepository.save(newAlbom)
    }
}