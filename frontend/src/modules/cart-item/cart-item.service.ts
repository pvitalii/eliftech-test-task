import { HttpService } from '../../common/http.service';
import { CartItem } from './cart-item.interface';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

export class CartItemService extends HttpService<CartItem> {
  async findByCartId() {
    const { data } = await this.get<CartItem[]>({
      url: 'cart-item/all-by-cart',
      withCredentials: true
    });
    console.log();
    return data;
  }

  async createOne(dto: CreateCartItemDto) {
    const { data } = await this.post({
      url: 'cart-item/create-cart-item',
      data: dto,
      withCredentials: true
    });
    return data;
  }

  async updateOne(dto: UpdateCartItemDto) {
    const { id, ...rest } = dto;
    this.put({
      url: `cart-item/update-cart-item/${id}`,
      data: rest
    });
  }

  async deleteOne(id: number) {
    this.delete({
      url: `cart-item/delete-cart-item/${id}`
    });
  }
}
