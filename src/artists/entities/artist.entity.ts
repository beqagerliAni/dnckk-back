import { Albom } from "src/alboms/entities/albom.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    musicks:string

    @ManyToMany(() =>Albom, (alboms) => alboms.artists)
    alboms:Albom[]

    @Column()
    biography:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date
}
