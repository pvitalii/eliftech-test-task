import { Router } from 'express';
import { OrderItemController } from './order_item.controller';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateOrderItemDto } from './dto/create-order-item.dto';

export const orderItemRouter = Router();

const orderItemController = new OrderItemController();

orderItemRouter
  .get('/all-order-items', orderItemController.findAll.bind(orderItemController))
  .get('/:id', orderItemController.findById.bind(orderItemController))
  .post(
    '/create-order-item',
    bodyValidator(CreateOrderItemDto),
    orderItemController.createOne.bind(orderItemController)
  )
  .put('/update-order-item/:id', orderItemController.updateOne.bind(orderItemController))
  .delete('/delete-order-item/:id', orderItemController.deleteOne.bind(orderItemController));
