import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
export declare class RolesGuard implements CanActivate {
    private refl;
    private jwt;
    constructor(refl: Reflector, jwt: JwtService);
    canActivate(ctx: ExecutionContext): boolean;
}
