import { HttpService } from '../../common/http.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { OrderItem } from './order-item.interface';

export class OrderItemsService extends HttpService<OrderItem> {
  async createOne(dto: CreateOrderItemDto) {
    const { data } = await this.post({
      url: 'order-item/create-order-item',
      data: dto
    });
    return data;
  }

  async findByOrder(orderId: number) {
    const { data } = await this.get<OrderItem[]>({
      url: 'order-item/all-order-items',
      params: { orderId }
    });
    return data;
  }
}
