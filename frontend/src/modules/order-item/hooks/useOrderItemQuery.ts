import { useQuery } from 'react-query';
import { OrderItemsService } from '../order-item.service';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';

const orderItemService = new OrderItemsService();

export const useGetOrderItemByOrder = (orderId: number) =>
  useQuery(QUERY_KEYS.ORDER_ITEM, () => orderItemService.findByOrder(orderId));
