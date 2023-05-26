import { useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';
import { CreateOrderItemDto } from '../dto/create-order-item.dto';
import { OrderItemsService } from '../order-item.service';

const orderItemService = new OrderItemsService();

export const useCreateOrderItem = () =>
  useMutation(QUERY_KEYS.ORDER_ITEM, (dto: CreateOrderItemDto) => orderItemService.createOne(dto));
