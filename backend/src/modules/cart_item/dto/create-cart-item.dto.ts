import { IsNumber } from 'class-validator';

export class CreateCartItemDto {
  @IsNumber()
  count: number;

  @IsNumber()
  productId: number;
}
