import { HttpService } from '../../common/http.service';
import { Shop } from './shop.interface';

export class ShopService extends HttpService<Shop> {
  async findAll() {
    const { data } = await this.get<Shop[]>({
      url: 'shop/all-shops'
    });
    return data;
  }

  async findById(id: number) {
    const { data } = await this.get({
      url: `shop/${id}`
    });
    return data;
  }
}
