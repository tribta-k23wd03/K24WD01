import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JWT_EXPIRES } from 'src/constants';

@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private jwt: JwtService,
  ) {}

  async register(email: string, password: string) {
    const exists = await this.users.findByEmail(email);
    if (exists) throw new ConflictException('Email already registered.');
    const passwordHash = await bcrypt.hash(password, 10);
    const u = await this.users.create(email, passwordHash);
    return this.sign(u._id.toString(), email, u.roles);
  }
  async login(email: string, password: string) {
    const u = await this.users.findByEmail(email);
    if (!u) throw new UnauthorizedException('invalid email.');
    const ok = await bcrypt.compare(password, u.passwordHash);
    if (!ok) throw new UnauthorizedException('invalid password.');
    return this.sign(u._id.toString(), u.email, u.roles);
  }
  private sign(sub: string, email: string, roles: string[]) {
    const access_token = this.jwt.sign({ sub, email, roles });
    return { access_token, token_type: 'Bearer', expires_in: JWT_EXPIRES };
  }
}
