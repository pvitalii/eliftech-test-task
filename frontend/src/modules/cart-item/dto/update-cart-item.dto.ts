import { CreateCartItemDto } from './create-cart-item.dto';

export interface UpdateCartItemDto extends Partial<CreateCartItemDto> {
  id: number;
}
