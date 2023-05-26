import { BaseController } from '../../common/base-controller';
import { Shop } from './shop.entity';
import { ShopService } from './shop.service';

export class ShopController extends BaseController<Shop> {
  constructor(private shopService = new ShopService()) {
    super(shopService);
  }
}
