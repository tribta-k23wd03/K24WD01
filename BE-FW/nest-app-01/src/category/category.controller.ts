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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ensureRole, FastFoodJwtGuard } from 'src/auth/fastfood-jwt.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @UseGuards(FastFoodJwtGuard)
  @Post()
  create(@Req() req: any, @Body() createCategoryDto: CreateCategoryDto) {
    ensureRole(req, 'admin');
    return this.categoryService.create(createCategoryDto);
  }

  @UseGuards(FastFoodJwtGuard)
  @Patch(':id')
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    ensureRole(req, 'admin');
    return this.categoryService.update(id, updateCategoryDto);
  }

  @UseGuards(FastFoodJwtGuard)
  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    ensureRole(req, 'admin');
    return this.categoryService.remove(id);
  }
}
