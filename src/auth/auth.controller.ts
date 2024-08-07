import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Public } from './guard/key.publick';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Public()
    @Post('login')
    login(@Body() authDto:AuthDto){
        return this.authService.login(authDto)
    }
    @Public()
    @Post('register')
    register(@Body() authDto:AuthDto){
        return this.authService.register(authDto)
    }
}
