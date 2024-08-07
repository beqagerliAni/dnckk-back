import { CustomDecorator, SetMetadata } from "@nestjs/common"

export const IS_PUBLICK_KEY:String =  'isPublick'
export const Public: () => CustomDecorator<String> = () => 
     SetMetadata(IS_PUBLICK_KEY,true)      