import { IsEmail, IsString, Length, max, maxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(5, 50)
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(10, 10)
  phone: string;
}
