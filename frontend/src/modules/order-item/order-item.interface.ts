import { Product } from '../product/product.interface';

export interface OrderItem {
  id: number;
  count: number;
  productId: number;
  orderId: number;
  product: Product;
}
