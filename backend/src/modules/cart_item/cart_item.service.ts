import { BaseService } from '../../common/base-service';
import { PostgresDataSource } from '../../database/app-data-source';
import { CartItem } from './cart_item.entity';

export class CartItemService extends BaseService<CartItem> {
  constructor(private cartItemRepository = PostgresDataSource.getRepository(CartItem)) {
    super(cartItemRepository);
  }

  findByCartId(cartId: number) {
    return this.repository.findBy({ cartId });
  }
}
