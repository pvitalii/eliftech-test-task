import { OrderItem } from '../order-item/order-item.interface';

export interface Order {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalPrice: number;
  orderItems: OrderItem[];
}
