import { IsArray, IsNumber, IsString, IsUrl } from "class-validator";

export class CreatePlaylistDto {
    @IsString()
    title: string;
  
    @IsUrl()
    imgUrl: string;

    @IsArray({each:true})
    musicIds: number[];
  
}
