import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './entities/chat.entity';
import { Model } from 'mongoose';
import { CreateChatDto } from './dto/chat.dto';

// export type ChatMsg = { id: string; text: string; at: number; from: string };

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private model: Model<ChatDocument>) {}
  // private msgs: ChatMsg[] = [];
  // private cap = 100;

  add(dto: CreateChatDto) {
    return this.model.create(dto);
  }

  recent() {
    return this.model.find().limit(100).lean();
  }
}
