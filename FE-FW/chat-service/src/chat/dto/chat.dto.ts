import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  text!: string;

  @IsNumber()
  at!: number;
  
  @IsString()
  from!: string;
}
