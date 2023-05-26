import { BaseService } from '../../common/base-service';
import { PostgresDataSource } from '../../database/app-data-source';
import { Order } from './order.entity';

export class OrderService extends BaseService<Order> {
  constructor(private orderRepository = PostgresDataSource.getRepository(Order)) {
    super(orderRepository);
  }
}
