import { HttpService } from '../../common/http.service';
import { Product } from './product.interface';

export class ProductService extends HttpService<Product> {
  async findAll(query?: Partial<Product>) {
    const { data } = await this.get<Product[]>({
      url: 'product/all-products',
      params: query
    });
    return data;
  }
}
