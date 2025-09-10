import { ChatService } from './chat.service';
import { AuthMsClient } from 'src/auth.ms.client';
import type { Server, WebSocket } from 'ws';
export declare class ChatGateway {
    private chat;
    private auth;
    server: Server;
    private metas;
    constructor(chat: ChatService, auth: AuthMsClient);
    handleConnection(client: WebSocket, req: any): Promise<void>;
    handleDisconnect(client: WebSocket): void;
    private broadcast;
}
