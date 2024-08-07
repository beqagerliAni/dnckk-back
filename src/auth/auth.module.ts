import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { JwtSecret } from './guard/JwtSecret';
import { AuthGuard } from './guard/guard';
import { UserRepository } from 'src/users/repositroy/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
    global:true,
    secret:JwtSecret.secret,
    signOptions: {expiresIn: '500s'}
  })],
  providers: [AuthService, UserRepository,{
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
  controllers: [AuthController]
})
export class AuthModule {}
