import { CustomDecorator, SetMetadata } from "@nestjs/common"
import { RoleEnum } from "./enum/role.enum"
export const  ROLES_KEY = 'roles'
export const Roles: (...roles:RoleEnum[]) =>    CustomDecorator<string> =
 (...roles:RoleEnum[]) => SetMetadata(ROLES_KEY,roles)  