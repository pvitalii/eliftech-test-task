import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';
import { CartItemService } from '../cart-item.service';

const cartItemService = new CartItemService();

export const useGetCartItemsByCart = () =>
  useQuery(QUERY_KEYS.CART_ITEM, () => cartItemService.findByCartId());
