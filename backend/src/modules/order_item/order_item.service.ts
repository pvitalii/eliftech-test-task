import { BaseService } from '../../common/base-service';
import { PostgresDataSource } from '../../database/app-data-source';
import { OrderItem } from './order_item.entity';

export class OrderItemService extends BaseService<OrderItem> {
  constructor(private orderItemRepository = PostgresDataSource.getRepository(OrderItem)) {
    super(orderItemRepository);
  }
}
