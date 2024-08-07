import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { RoleEnum } from './enum/role.enum';
import { ROLES_KEY } from './guardd.key';
import { JwtSecret } from './JwtSecret';
import { IS_PUBLICK_KEY } from './key.publick';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
      private readonly jwtService: JwtService,
      private reflector: Reflector,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const isPublic: boolean = this.reflector.getAllAndOverride<boolean>(
            IS_PUBLICK_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (isPublic) {
        return true;
      }
  
      const request: Request = context.switchToHttp().getRequest();
      const token: string = this.extractTokenFromHeader(request);
      
      if (!token) {
        console.log(token);
        throw new UnauthorizedException('Unauthorized');
      }
      
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: JwtSecret.secret,
        });
        console.log(payload);
        
        const roles: RoleEnum[] = this.reflector.getAllAndOverride<RoleEnum[]>(
          ROLES_KEY,
          [context.getHandler(), context.getClass()],
        );
        console.log(roles, 'roles');
        
        const isRouteGuardedWithRole: boolean = !!roles.length;
        
        if (isRouteGuardedWithRole) {
          return roles.some((role) => payload.role === role);
        }
        
        
      } catch (err) {
        throw new UnauthorizedException('expired token');
      }
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }