import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MessagePattern } from '@nestjs/microservices';
import { JWT_SECRET } from 'src/constants';

@Controller()
export class AuthMsController {
  private jwt = new JwtService({ secret: JWT_SECRET });

  @MessagePattern('auth.verify')
  verifyToken(payload: { token: string }) {
    const { token } = payload || {};
    const data = this.jwt.verify(token);

    return { sub: data.sub, email: data.email, roles: data.roles ?? [] };
  }
}
