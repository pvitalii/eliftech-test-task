import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';
import { OrderService } from '../order.service';

const orderService = new OrderService();

export const useGetOrderByParams = (email: string, phone: string) => {
  return useQuery(QUERY_KEYS.ORDER, () => orderService.findByNameAndPhone(email, phone), {
    refetchOnMount: true
  });
};
