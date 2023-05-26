import { ChangeEvent, useContext, useEffect } from 'react';
import { useGetCartItemsByCart } from '../../../../modules/cart-item/hooks/useCartItemQuery';
import {
  CountButton,
  OrderItemCard,
  OrderItemCount,
  OrderItemCountBox,
  OrderItemInfoBox,
  OrderItemsContainer
} from './order-items.styled';
import { PriceContext } from '../..';
import {
  useDeleteCartItem,
  useUpdateCartItem
} from '../../../../modules/cart-item/hooks/useCartItemMutation';

export function OrderItemsSection() {
  const { data: cartItems, isSuccess: isSuccessFetch } = useGetCartItemsByCart();
  const { mutate: updateCartItemMutate, isSuccess: isSuccessUpdate } = useUpdateCartItem();
  const { mutate: deleteCartItemMutate } = useDeleteCartItem();
  const priceContext = useContext(PriceContext);

  useEffect(() => {
    if (isSuccessFetch) {
      priceContext.setPrice(
        cartItems
          .map((item) => item.product.price * item.count)
          .reduce((partialSum, a) => partialSum + a, 0)
      );
    }
  }, [priceContext.price, isSuccessFetch, cartItems, priceContext, isSuccessUpdate]);

  const handleCountInput = (event: ChangeEvent<HTMLInputElement>, cartItemId: number) => {
    updateCartItemMutate({ id: cartItemId, count: +event.target.value });
  };

  const handleCountButtonClick = (cartItemId: number, count: number) => {
    if (count === 0) {
      deleteCartItemMutate(cartItemId);
      return;
    }
    updateCartItemMutate({ id: cartItemId, count });
  };

  return (
    <OrderItemsContainer>
      {cartItems?.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Cart is empty for now</p>
      ) : null}
      {cartItems?.map((cartItem) => {
        return (
          <OrderItemCard key={cartItem.id}>
            <div style={{ flex: 1 }}>
              <img
                src={process.env.REACT_APP_SERVER_URL + `/${cartItem.product.image}`}
                alt="product"
              />
            </div>
            <OrderItemInfoBox>
              <p>{cartItem.product.name}</p>
              <p>Price: {cartItem.product.price}$</p>
              <OrderItemCountBox>
                <CountButton
                  onClick={() => {
                    handleCountButtonClick(cartItem.id, cartItem.count + 1);
                  }}
                >
                  +
                </CountButton>
                <OrderItemCount
                  value={cartItem.count}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    handleCountInput(event, cartItem.id)
                  }
                />
                <CountButton
                  onClick={() => {
                    handleCountButtonClick(cartItem.id, cartItem.count - 1);
                  }}
                >
                  -
                </CountButton>
              </OrderItemCountBox>
            </OrderItemInfoBox>
          </OrderItemCard>
        );
      })}
    </OrderItemsContainer>
  );
}
