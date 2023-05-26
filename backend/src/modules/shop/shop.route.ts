import { Router } from 'express';
import { ShopController } from './shop.controller';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateShopDto } from './dto/create-shop.dto';

export const shopRouter = Router();

const shopController = new ShopController();

shopRouter
  .get('/all-shops', shopController.findAll.bind(shopController))
  .get('/:id', shopController.findById.bind(shopController))
  .post('/create-shop', bodyValidator(CreateShopDto), shopController.createOne.bind(shopController))
  .put('/update-shop/:id', shopController.updateOne.bind(shopController))
  .delete('/delete-shop/:id', shopController.deleteOne.bind(shopController));
