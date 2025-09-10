import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.entity';
import { MenuModule } from 'src/menu/menu.module';
import { AuthClientModule } from 'src/auth/auth.client.module';
import { FastFoodJwtGuard } from 'src/auth/fastfood-jwt.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MenuModule,
    AuthClientModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, FastFoodJwtGuard],
})
export class OrderModule {}
