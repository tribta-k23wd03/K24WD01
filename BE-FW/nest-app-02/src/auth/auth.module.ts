import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_EXPIRES, JWT_SECRET } from 'src/constants';
import { AuthMsController } from './auth.ms.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: JWT_EXPIRES },
    }),
  ],
  controllers: [AuthController, AuthMsController],
  providers: [AuthService],
  exports: [JwtModule],
})
export class AuthModule {}
