import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthMsClient } from './auth.ms.client';
import { firstValueFrom } from 'rxjs';

// export const JWT_SECRET = "P#Gww!)]-,bCUl~N9bUH+CX3KEeZ[=)}DKSM$YW@42c&Om'5Aq";

@Injectable()
export class FastFoodJwtGuard implements CanActivate {
  constructor(private ms: AuthMsClient) {}
  // private jwt = new JwtService({ secret: JWT_SECRET });

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';

    if (!token) throw new UnauthorizedException('Missing Token.');
    // req.user = this.jwt.verify(token);

    try {
      const payload = await firstValueFrom(this.ms.sendVerify(token));
      req.user = payload;
      return true;
    } catch (error: any) {
      if (
        error.code === 'ECONNREFUSED' ||
        error.message.includes('ECONNREFUSED')
      ) {
        throw new ServiceUnavailableException(
          'Authentication Service (:8888) is not activated.',
        );
      }
    }

    return true;
  }
}
export const getUserId = (req: any): string => req?.user?.sub;

export const ensureRole = (req: any, role: string) => {
  if (!req.user?.roles?.includes(role)) {
    throw new ForbiddenException(`Only ${role} can access!`);
  }
};
