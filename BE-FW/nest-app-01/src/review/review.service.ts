import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './entities/review.entity';
import { Model } from 'mongoose';
import { MenuService } from 'src/menu/menu.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    private menuService: MenuService,
  ) {}

  async create(
    createReviewDto: CreateReviewDto,
    userId: string,
  ): Promise<Review> {
    await this.menuService.findOne(createReviewDto.item);
    return new this.reviewModel({ ...createReviewDto, userId }).save();
  }

  findAll(): Promise<Review[]> {
    return this.reviewModel
      .find()
      .populate('user', 'name')
      .populate({ path: 'item', select: 'name' })
      .sort({ createdAt: -1 })
      .exec();
  }

  findOne(id: string): Promise<Review | null> {
    const review = this.reviewModel
      .findById(id)
      .populate('user', 'name')
      .populate({ path: 'item', select: 'name' })
      .exec();
    if (!review) throw new NotFoundException('Review not found!');
    return review;
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    const updatedReview = this.reviewModel
      .findByIdAndUpdate(id, updateReviewDto, { new: true })
      .populate('user', 'name')
      .populate({ path: 'item', select: 'name' })
      .exec();
    if (!updatedReview) throw new NotFoundException('Review not found!');
    return updatedReview;
  }

  remove(id: string) {
    const review = this.reviewModel.findByIdAndDelete(id).exec();
    if (!review) throw new NotFoundException('Review not found!');
    return review;
  }
}
