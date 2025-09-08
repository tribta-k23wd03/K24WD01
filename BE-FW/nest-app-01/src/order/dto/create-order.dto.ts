import { IsArray, IsMongoId, IsString } from 'class-validator';

export class CreateOrderDto {


  @IsArray()
  @IsMongoId({ each: true })
  item: string[];
}
