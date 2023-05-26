import { Product } from '../product/product.interface';

export interface CartItem {
  id: number;
  cartId: number;
  productId: number;
  count: number;
  product: Product;
}
