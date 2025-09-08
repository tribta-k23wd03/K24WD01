import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}
  findByEmail(email: string) {
    return this.model.findOne({ email }).lean();
  }
  create(email: string, passwordHash: string, roles: string[] = ['user']) {
    return this.model.create({ email, passwordHash, roles });
  }
  async addRoleAdmin(email: string) {
    return this.model
      .findOneAndUpdate(
        { email },
        { $addToSet: { roles: 'admin' } },
        { new: true },
      )
      .lean();
  }
}
