import { Router } from 'express';
import { OrderController } from './order.controller';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateOrderDto } from './dto/create-order.dto';

export const orderRouter = Router();

const orderController = new OrderController();

orderRouter
  .get('/all-orders', orderController.findAll.bind(orderController))
  .get('/:id', orderController.findById.bind(orderController))
  .post(
    '/create-order',
    bodyValidator(CreateOrderDto),
    orderController.createOne.bind(orderController)
  )
  .put('/update-order/:id', orderController.updateOne.bind(orderController))
  .delete('/delete-order/:id', orderController.deleteOne.bind(orderController));
