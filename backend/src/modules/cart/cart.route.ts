import { Router } from 'express';
import { CartController } from './cart.controller';

export const cartRouter = Router();

const cartController = new CartController();

cartRouter
  .get('/all-carts', cartController.findAll.bind(cartController))
  .get('/:id', cartController.findById.bind(cartController))
  .post('/create-cart', cartController.createOne.bind(cartController))
  .put('/update-cart/:id', cartController.updateOne.bind(cartController))
  .delete('/delete-cart/:id', cartController.deleteOne.bind(cartController));
