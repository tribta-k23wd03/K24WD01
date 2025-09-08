import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  ensureRole,
  FastFoodJwtGuard,
  getUserId,
} from 'src/auth/fastfood-jwt.guard';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  private async loadAndAuthorize(req: any, id: string) {
    const order = await this.orderService.findOne(id);
    if ((order as any).userId !== getUserId(req)) {
      ensureRole(req, 'admin');
    }
    return order;
  }

  @UseGuards(FastFoodJwtGuard)
  @Get()
  findAll(@Req() req: any) {
    ensureRole(req, 'admin');
    return this.orderService.findAll();
  }

  @UseGuards(FastFoodJwtGuard)
  @Get(':id')
  findOne(@Req() req: any, @Param('id') id: string) {
    return this.loadAndAuthorize(req, id);
  }

  @UseGuards(FastFoodJwtGuard)
  @Post()
  create(@Req() req: any, @Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto, getUserId(req));
  }
  @UseGuards(FastFoodJwtGuard)
  @Patch(':id')
  async update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    await this.loadAndAuthorize(req, id);
    return this.orderService.update(id, updateOrderDto);
  }

  @UseGuards(FastFoodJwtGuard)
  @Delete(':id')
  async remove(@Req() req: any, @Param('id') id: string) {
    await this.loadAndAuthorize(req, id);
    const deleted = await this.orderService.remove(id);
    return { id: deleted.id, message: 'Your order has been deleted.' };
  }
}
