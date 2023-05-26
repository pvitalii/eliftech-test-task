import { Router } from 'express';
import { CartItemController } from './cart_item.controller';
import { bodyValidator } from '../../middlewares/body-validator';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { processCart } from '../../middlewares/process-cart';

export const cartItemRouter = Router();

const cartItemController = new CartItemController();

cartItemRouter
  .get('/all-cart-items', cartItemController.findAll.bind(cartItemController))
  .get('/all-by-cart', processCart, cartItemController.findByCardId.bind(cartItemController))
  .get('/:id', cartItemController.findById.bind(cartItemController))
  .post(
    '/create-cart-item',
    bodyValidator(CreateCartItemDto),
    processCart,
    cartItemController.createOne.bind(cartItemController)
  )
  .put(
    '/update-cart-item/:id',
    bodyValidator(UpdateCartItemDto),
    cartItemController.updateOne.bind(cartItemController)
  )
  .delete('/delete-cart-item/:id', cartItemController.deleteOne.bind(cartItemController));
