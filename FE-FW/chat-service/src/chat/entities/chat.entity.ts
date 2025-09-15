import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({ timestamps: true })
export class Chat {
  @Prop({ required: true })
  id!: string;
  @Prop({ required: true })
  text!: string;
  @Prop({ required: true })
  at!: number;
  @Prop({ required: true })
  from!: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);

ChatSchema.index({ at: -1 });
