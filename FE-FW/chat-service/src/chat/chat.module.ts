import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { AuthMsClient } from 'src/auth.ms.client';

@Module({
  providers: [ChatGateway, ChatService, AuthMsClient],
})
export class ChatModule {}
