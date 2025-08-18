import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Order, OrderSchema } from './entities/order.entity';
import { MenuService } from 'src/menu/menu.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MenuService,
    UsersService,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
