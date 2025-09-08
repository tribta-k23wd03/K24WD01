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
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import {
  ensureRole,
  FastFoodJwtGuard,
  getUserId,
} from 'src/auth/fastfood-jwt.guard';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  private async loadAndAuthorize(req: any, id: string) {
    const review = await this.reviewService.findOne(id);
    if (review?.userId !== getUserId(req)) {
      ensureRole(req, 'admin');
    }
    return review;
  }
  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @UseGuards(FastFoodJwtGuard)
  @Post()
  create(@Req() req: any, @Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto, getUserId(req));
  }

  @UseGuards(FastFoodJwtGuard)
  @Patch(':id')
  async update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    await this.loadAndAuthorize(req, id);
    return this.reviewService.update(id, updateReviewDto);
  }

  @UseGuards(FastFoodJwtGuard)
  @Delete(':id')
  async remove(@Req() req: any, @Param('id') id: string) {
    await this.loadAndAuthorize(req, id);
    return this.reviewService.remove(id);
  }
}
