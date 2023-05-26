import { IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNumber()
  count: number;

  @IsNumber()
  orderId: number;

  @IsNumber()
  productId: number;
}
