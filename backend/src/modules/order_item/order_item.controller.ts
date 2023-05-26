import { BaseController } from '../../common/base-controller';
import { OrderItem } from './order_item.entity';
import { OrderItemService } from './order_item.service';

export class OrderItemController extends BaseController<OrderItem> {
  constructor(private orderItemService = new OrderItemService()) {
    super(orderItemService);
  }
}
