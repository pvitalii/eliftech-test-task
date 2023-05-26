import { Router } from 'express';
import { ProductController } from './product.controller';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateProductDto } from './dto/create-product.dto';

export const productRouter = Router();

const productController = new ProductController();

productRouter
  .get('/all-products', productController.findAll.bind(productController))
  .get('/:id', productController.findById.bind(productController))
  .post(
    '/create-product',
    bodyValidator(CreateProductDto),
    productController.createOne.bind(productController)
  )
  .put('/update-product/:id', productController.updateOne.bind(productController))
  .delete('/delete-product/:id', productController.deleteOne.bind(productController));
