import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: Types.ObjectId, ref: 'Menu' })
  item: Types.ObjectId;

  @Prop()
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
