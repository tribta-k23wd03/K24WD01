import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const JWT_SECRET = "P#Gww!)]-,bCUl~N9bUH+CX3KEeZ[=)}DKSM$YW@42c&Om'5Aq";

@Injectable()
export class FastFoodJwtGuard implements CanActivate {
  private jwt = new JwtService({ secret: JWT_SECRET });

  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    if (!token) throw new UnauthorizedException('Missing Token.');
    req.user = this.jwt.verify(token);
    return true;
  }
}

export const isAdmin = (req: any) => req.user.role.include('admin') || false;

export const ensureAdmin = (req: any) => {
  if (!isAdmin(req)) throw new ForbiddenException('FORBIDDEN.');
};
