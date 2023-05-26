import { HttpService } from '../../common/http.service';
import { CreateOrderDto } from './dto/create-order-dto';
import { Order } from './order.interface';

export class OrderService extends HttpService<Order> {
  async findByNameAndPhone(email: string, phone: string) {
    const { data } = await this.get<Order[]>({
      url: 'order/all-orders',
      params: {
        email,
        phone
      }
    });
    return data;
  }

  async createOne(dto: CreateOrderDto) {
    const { data } = await this.post({
      url: 'order/create-order',
      data: dto
    });
    return data;
  }
}
