import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';
import { CartItemService } from '../cart-item.service';
import { CreateCartItemDto } from '../dto/create-cart-item.dto';
import { CartItem } from '../cart-item.interface';
import { UpdateCartItemDto } from '../dto/update-cart-item.dto';

const cartItemService = new CartItemService();

export const useCreateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation(
    QUERY_KEYS.CART_ITEM,
    (dto: CreateCartItemDto) => cartItemService.createOne(dto),
    {
      onSuccess: () => {
        queryClient.refetchQueries(QUERY_KEYS.CART_ITEM);
      }
    }
  );
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation(QUERY_KEYS.CART_ITEM, (id: number) => cartItemService.deleteOne(id), {
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.CART_ITEM });
      const previous = queryClient.getQueryData<CartItem[]>(QUERY_KEYS.CART_ITEM);
      if (previous) {
        queryClient.setQueryData(
          QUERY_KEYS.CART_ITEM,
          previous.filter((item) => item.id !== id)
        );
      }
    }
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation(
    [QUERY_KEYS.CART_ITEM],
    (dto: UpdateCartItemDto) => cartItemService.updateOne(dto),
    {
      onMutate: async ({ id, count }) => {
        await queryClient.cancelQueries({ queryKey: QUERY_KEYS.CART_ITEM });
        const previous = queryClient.getQueryData<CartItem[]>(QUERY_KEYS.CART_ITEM);
        if (previous) {
          queryClient.setQueryData(
            QUERY_KEYS.CART_ITEM,
            previous.map((item) => {
              if (item.id === id && count) {
                item.count = count;
              }
              return item;
            })
          );
        }
      }
    }
  );
};
