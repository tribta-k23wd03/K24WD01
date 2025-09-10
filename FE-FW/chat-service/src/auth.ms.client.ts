import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { AUTH_MS_HOST, AUTH_MS_PORT } from './constants';

@Injectable()
export class AuthMsClient {
  private client: ClientProxy = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: { host: AUTH_MS_HOST, port: AUTH_MS_PORT },
  });

  sendVerify(token: string) {
    return this.client.send<{ sub: string; email: string; roles: string[] }>(
      'auth.verify',
      { token },
    );
  }
}
