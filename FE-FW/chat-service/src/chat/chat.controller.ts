import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private chat: ChatService) {}
  @Get('history')
  history() {
    return this.chat.recent();
  }
}
