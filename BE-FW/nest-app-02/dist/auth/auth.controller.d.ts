import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Request } from 'express';
export declare class AuthController {
    private readonly auth;
    private jwt;
    constructor(auth: AuthService, jwt: JwtService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        token_type: string;
        expires_in: number;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        token_type: string;
        expires_in: number;
    }>;
    me(req: Request): {
        sub: any;
        email: any;
        roles: any;
    };
    promote(req: Request, body: {
        email: string;
    }): Promise<(import("mongoose").FlattenMaps<{
        email: string;
        passwordHash: string;
        roles: string[];
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
