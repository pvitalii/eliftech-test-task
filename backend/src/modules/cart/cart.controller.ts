import { Request, Response } from 'express';
import { DeepPartial } from 'typeorm';
import { BaseController } from '../../common/base-controller';
import { Cart } from './cart.entity';
import { CartService } from './cart.service';

export class CartController extends BaseController<Cart> {
  constructor(private cartService = new CartService()) {
    super(cartService);
  }

  override async createOne(req: Request<unknown, unknown, DeepPartial<Cart>>, res: Response) {
    const newCart = await this.service.createOne({});
    res.cookie('cartId', newCart.id);
    return res.json(newCart);
  }
}
