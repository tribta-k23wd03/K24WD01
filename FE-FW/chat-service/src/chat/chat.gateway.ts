import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { AuthMsClient } from 'src/auth.ms.client';
import { URL } from 'url';
import { REQUIRE_AUTH } from 'src/constants';
import { firstValueFrom } from 'rxjs';
import { v4 as uuid } from 'uuid';
import type { Server, WebSocket } from 'ws';
import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/chat.dto';

type ClientMeta = { name: string; userId?: string; email?: string };

@WebSocketGateway({ path: '/chat' }) // ws://127.0.0.1:7777/chat
@Injectable()
export class ChatGateway {
  @WebSocketServer() server: Server;
  private metas = new WeakMap<WebSocket, ClientMeta>();

  constructor(
    private chat: ChatService,
    private auth: AuthMsClient,
  ) {}

  // 1. NestJS sẽ call Client A khi Client B connected!
  async handleConnection(client: WebSocket, req: any) {
    // get name & token from query
    const u = new URL(req.url, 'http://localhost');
    const name = (u.searchParams.get('name') || 'guest').substring(0, 32);
    const token = u.searchParams.get('token') || '';

    const meta: ClientMeta = { name };

    if (REQUIRE_AUTH && token) {
      try {
        const payload = await firstValueFrom(this.auth.sendVerify(token));
        ((meta.userId = payload.sub), (meta.email = payload.email));
      } catch {
        client.close(1008, 'Invalid Tokens');
        return;
      }
    } else if (REQUIRE_AUTH && !token) {
      client.close(1008, 'Invalid Token');
      return;
    }
    this.metas.set(client, meta);
    client.send(
      JSON.stringify({ type: 'hello', you: meta, recent: await this.chat.recent() }),
    );

    // Send messages:
    client.on('message', async (buf) => {
      const text = (typeof buf === 'string' ? buf : buf.toString()).trim();
      if (!text) return;

      const m: CreateChatDto = {
        id: uuid(),
        text,
        at: Date.now(),
        from: meta.userId ? meta.email || meta.name : meta.name,
      };
      await this.chat.add(m);
      this.broadcast({ type: 'chat.new', msg: m });
    });
  }

  // 2. Khi client A | B mà đăng xuất thì đóng kết nối!
  handleDisconnect(client: WebSocket) {
    this.metas.delete(client);
  }

  // 3. BroadCast: truyền tin nhắn cho all users.
  private broadcast(data: any) {
    const s = JSON.stringify(data);
    this.server.clients.forEach((c) => {
      if (c.readyState === 1) c.send(s);
    });
  }
}
