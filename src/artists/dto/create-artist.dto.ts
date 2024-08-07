import { IsArray, IsNumber, IsString } from "class-validator"

export class CreateArtistDto {
    @IsString()
    name:string

    @IsArray({each:true})
    @IsNumber()
    albomIds:number[]

    @IsString()
    biography:string
}
