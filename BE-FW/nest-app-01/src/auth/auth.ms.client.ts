import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

// MicroService ip & port:
export const AUTH_MS_HOST = '127.0.0.1';
export const AUTH_MS_PORT = 4010;

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
