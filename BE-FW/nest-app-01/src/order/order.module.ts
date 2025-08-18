import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Order, OrderSchema } from './entities/order.entity';
import { MenuModule } from 'src/menu/menu.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MenuModule,
    UsersModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
