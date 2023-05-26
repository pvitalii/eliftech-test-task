import { BaseController } from '../../common/base-controller';
import { Order } from './order.entity';
import { OrderService } from './order.service';

export class OrderController extends BaseController<Order> {
  constructor(private orderService = new OrderService()) {
    super(orderService);
  }
}
