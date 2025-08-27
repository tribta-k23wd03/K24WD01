import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Review extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Menu' })
  item: Types.ObjectId;
  @Prop()
  rating: number;
  @Prop()
  comment: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
