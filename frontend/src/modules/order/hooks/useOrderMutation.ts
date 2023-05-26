import { useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';
import { CreateOrderDto } from '../dto/create-order-dto';
import { OrderService } from '../order.service';

const orderService = new OrderService();

export const useCreateOrder = () =>
  useMutation(QUERY_KEYS.ORDER, (dto: CreateOrderDto) => orderService.createOne(dto));
