import { Router } from 'express';
import { shopRouter } from './modules/shop/shop.route';
import { cartRouter } from './modules/cart/cart.route';
import { productRouter } from './modules/product/product.route';
import { orderRouter } from './modules/order/order.route';
import { orderItemRouter } from './modules/order_item/order_item.route';
import { cartItemRouter } from './modules/cart_item/cart_item.route';

export const appRouter = Router();

appRouter
  .use('/shop', shopRouter)
  .use('/product', productRouter)
  .use('/order', orderRouter)
  .use('/order-item', orderItemRouter)
  .use('/cart', cartRouter)
  .use('/cart-item', cartItemRouter);
