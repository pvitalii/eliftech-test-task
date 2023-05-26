import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { InputField, OrderDetailsForm, OrderFormInput } from './order-form.styled';
import { useCreateOrder } from '../../../../../../modules/order/hooks/useOrderMutation';
import { useGetCartItemsByCart } from '../../../../../../modules/cart-item/hooks/useCartItemQuery';
import { useCreateOrderItem } from '../../../../../../modules/order-item/hooks/useOrderItemMutation';
import { useDeleteCartItem } from '../../../../../../modules/cart-item/hooks/useCartItemMutation';
import { PriceContext } from '../../../..';

export function OrderForm() {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    totalPrice: ''
  };
  const [state, setState] = useState(initialState);

  const { mutateAsync: createOrderMutate, isSuccess: isOrderSuccess } = useCreateOrder();
  const { mutateAsync: createOrderItemMutate } = useCreateOrderItem();
  const { mutate: deleteCartItemMutate } = useDeleteCartItem();
  const { data: cartItems } = useGetCartItemsByCart();
  const priceContext = useContext(PriceContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (cartItems?.length === 0) return;
    const order = await createOrderMutate({ ...state, totalPrice: priceContext.price });
    cartItems?.forEach(async (item) => {
      await createOrderItemMutate({
        orderId: order.id,
        count: item.count,
        productId: item.product.id
      });
      deleteCartItemMutate(item.id);
      setState(initialState);
    });
  };

  return (
    <OrderDetailsForm id="order-details" onSubmit={handleSubmit}>
      <InputField>
        Name
        <OrderFormInput
          required
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
        />
      </InputField>
      <InputField>
        Email
        <OrderFormInput
          required
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
        />
      </InputField>
      <InputField>
        Phone
        <OrderFormInput required name="phone" value={state.phone} onChange={handleChange} />
      </InputField>
      <InputField>
        Address
        <OrderFormInput
          required
          name="address"
          type="text"
          value={state.address}
          onChange={handleChange}
        />
      </InputField>
      {isOrderSuccess ? (
        <div style={{ textAlign: 'center' }}>Your order has been successfully created</div>
      ) : null}
    </OrderDetailsForm>
  );
}
