import { IsEmail, IsNumber, IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  @MinLength(10)
  @MaxLength(12)
  phone: string;

  @IsString()
  address: string;

  @IsNumber()
  totalPrice: number;
}
