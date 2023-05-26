import { BaseService } from '../../common/base-service';
import { PostgresDataSource } from '../../database/app-data-source';
import { Product } from './product.entity';

export class ProductService extends BaseService<Product> {
  constructor(private productRepository = PostgresDataSource.getRepository(Product)) {
    super(productRepository);
  }
}
