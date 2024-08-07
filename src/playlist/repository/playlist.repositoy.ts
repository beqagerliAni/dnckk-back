import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Playlist } from "../entities/playlist.entity";
import { CreatePlaylistDto } from "../dto/create-playlist.dto";
import { Musick } from "src/musicks/entities/musick.entity";

export class PLaylistRepository {
    constructor(@InjectRepository(Playlist) private playlistRepository:Repository<Playlist>) {}
    async create(createPlaylistkDto: CreatePlaylistDto) {
        
        const newPlaylist = new Playlist()
        newPlaylist.imgUrl = createPlaylistkDto.imgUrl
        newPlaylist.title = createPlaylistkDto.title
        
        const ArrayOfMusicks = []
        
        for(const musickId of createPlaylistkDto.musicIds){
            const newMusick = new Musick()
            newMusick.id = musickId
            await ArrayOfMusicks.push(newMusick)
        }
        newPlaylist.musicks = ArrayOfMusicks
        return await this.playlistRepository.save(newPlaylist)
    }
    async findAll(){
       return  await this.playlistRepository.find({relations: {musicks:true}})
    }

}