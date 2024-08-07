import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/repositroy/user.repository';
import { AuthDto } from './dto/auth.dto';
import * as  bcrypt from 'bcrypt' 
import { JwtService } from '@nestjs/jwt';
import { JwtSecret } from './guard/JwtSecret';
@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService,
        private userRepository:UserRepository) {}
        async login(authDto: AuthDto){
            const { email, password } = authDto;
        
            const user = await this.userRepository.findByEmail
            (email);
        
            const isPasswordCorrect: boolean =
              user && (await bcrypt.compare(password, user.password));
        
            if (isPasswordCorrect) {
              const payload: {
                email: string;
                password: string;
                role: string;
              } = {
                email: user.email,
                password: user.password,
                role: user.role,
              };
              return {
                accessToken: await this.jwtService.signAsync(payload, {
                  secret: JwtSecret.secret,
                }),
              };
            }
          }
        async register(authDto:AuthDto){
          const {password,email} = authDto

          const salt = await bcrypt.genSalt()

          const hashedpassword = await bcrypt.hash(password,salt)

          const newUser = await this.userRepository.create({
            password:hashedpassword,
            email
          })             
          return newUser
        }
}
