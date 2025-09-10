import { ChatService } from './chat.service';
import { AuthMsClient } from 'src/auth.ms.client';
export declare class ChatGateway {
    private chat;
    private auth;
    private metas;
    constructor(chat: ChatService, auth: AuthMsClient);
    handleConnection(client: WebSocket, req: any): Promise<void>;
    handleDisconnect(client: WebSocket): void;
    private broadcast;
}
