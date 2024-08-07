import { Albom } from "src/alboms/entities/albom.entity";
import { Playlist } from "src/playlist/entities/playlist.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Musick {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    imgUrl:string

    @ManyToMany(() => Playlist, (playlist) => playlist.musicks)
    playlists:Playlist

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date
}
