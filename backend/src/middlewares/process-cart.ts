import { NextFunction, Request, Response } from 'express';
import { CartService } from '../modules/cart/cart.service';

const cartService = new CartService();

export async function processCart(req: Request, res: Response, next: NextFunction) {
  if (req.cookies.cartId) return next();
  const newCart = await cartService.createOne({});
  req.cookies.cartId = newCart.id;
  res.cookie('cartId', newCart.id, { sameSite: 'none', secure: true, httpOnly: true });
  return next();
}
