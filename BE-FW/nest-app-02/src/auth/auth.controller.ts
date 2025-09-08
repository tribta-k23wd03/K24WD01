import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private jwt: JwtService,
  ) {}

  @Post('register') register(@Body() dto: RegisterDto) {
    return this.auth.register(dto.email, dto.password);
  }

  @Post('login') login(@Body() dto: LoginDto) {
    return this.auth.login(dto.email, dto.password);
  }

  @Get('me') me(@Req() req: Request) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    const payload = this.jwt.verify(token);
    return { sub: payload.sub, email: payload.email, roles: payload.role };
  }

  @Post('promote')
  promote(@Req() req: Request, @Body() body: { email: string }) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    const me = this.jwt.verify(token);
    if (!me.roles?.includes('admin'))
      throw new UnauthorizedException('You are not Admin.');
    return this.auth['users'].addRoleAdmin(body.email);
  }
}
