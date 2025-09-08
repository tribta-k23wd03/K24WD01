import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private users;
    private jwt;
    constructor(users: UsersService, jwt: JwtService);
    register(email: string, password: string): Promise<{
        access_token: string;
        token_type: string;
        expires_in: number;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
        token_type: string;
        expires_in: number;
    }>;
    private sign;
}
