import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './entities/menu.entity';
import { CategoryModule } from 'src/category/category.module';
import { AuthClientModule } from 'src/auth/auth.client.module';
import { FastFoodJwtGuard } from 'src/auth/fastfood-jwt.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
    CategoryModule,
    AuthClientModule,
  ],
  controllers: [MenuController],
  providers: [MenuService, FastFoodJwtGuard],
  exports: [MenuService],
})
export class MenuModule {}
