import { BaseService } from '../../common/base-service';
import { PostgresDataSource } from '../../database/app-data-source';
import { Cart } from './cart.entity';

export class CartService extends BaseService<Cart> {
  constructor(private cartRepository = PostgresDataSource.getRepository(Cart)) {
    super(cartRepository);
  }
}
