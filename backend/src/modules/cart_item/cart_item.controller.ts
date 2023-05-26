import { Request, Response } from 'express';
import { DeepPartial } from 'typeorm';
import { BaseController } from '../../common/base-controller';
import { CartItem } from './cart_item.entity';
import { CartItemService } from './cart_item.service';

export class CartItemController extends BaseController<CartItem> {
  constructor(private cartItemService = new CartItemService()) {
    super(cartItemService);
  }

  override async createOne(req: Request<unknown, unknown, DeepPartial<CartItem>>, res: Response) {
    const userCart = req.cookies.cartId;
    const newCartItem = await this.service.createOne({ cartId: +userCart, ...req.body });
    return res.json(newCartItem);
  }

  async findByCardId(req: Request, res: Response) {
    const userCart = req.cookies.cartId;
    const cartItems = await this.cartItemService.findByCartId(+userCart);
    return res.json(cartItems);
  }
}
