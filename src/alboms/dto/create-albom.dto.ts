import { IsArray, IsNumber, IsString } from "class-validator"

export class CreateAlbomDto {
    @IsString()
    title:string

    @IsString()
    imgUrl:string

    @IsArray({each:true})
    @IsNumber()
    artistIds:number[]
}
