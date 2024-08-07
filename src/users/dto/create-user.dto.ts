import { IsEnum, IsString } from "class-validator";
import { RoleEnum } from "src/auth/guard/enum/role.enum";

export class CreateUserDto {
    @IsString()
    email:string

    @IsString()
    password:string
}
