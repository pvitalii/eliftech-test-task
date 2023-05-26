import { BaseService } from '../../common/base-service';
import { PostgresDataSource } from '../../database/app-data-source';
import { Shop } from './shop.entity';

export class ShopService extends BaseService<Shop> {
  constructor(private shopRepository = PostgresDataSource.getRepository(Shop)) {
    super(shopRepository);
  }
}
