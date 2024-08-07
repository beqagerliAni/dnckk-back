import { Musick } from "src/musicks/entities/musick.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    imgUrl:string

    @ManyToMany(() =>  Musick, (musicks) => musicks.playlists, {cascade:true})
    @JoinTable()
    musicks:Musick[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date

}
