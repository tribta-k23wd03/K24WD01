import { Injectable } from '@nestjs/common';

export type ChatMsg = { id: string; text: string; at: number; from: string };

@Injectable()
export class ChatService {
  private msgs: ChatMsg[];
  private cap = 100;

  add(m: ChatMsg) {
    this.msgs.push(m);
    if (this.msgs.length > this.cap) this.msgs.shift();
  }

  recent() {
    return this.msgs;
  }
}
