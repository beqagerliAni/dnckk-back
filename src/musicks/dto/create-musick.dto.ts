import { IsString } from "class-validator";

export class CreateMusickDto {
    @IsString()
    name:string

    @IsString()
    imgUrl:string
}
