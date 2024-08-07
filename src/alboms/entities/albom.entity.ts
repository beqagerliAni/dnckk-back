import { Artist } from "src/artists/entities/artist.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Albom {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    imgUrl:string

    @ManyToMany(() => Artist, (artists) => artists.alboms, {cascade:true})   
    @JoinTable()
    artists:Artist[]
    
    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date


}
