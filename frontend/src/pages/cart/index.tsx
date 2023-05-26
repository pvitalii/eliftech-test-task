import { createContext, useState } from 'react';
import { CartPageContainer, CartPageGrid, SubmitButton, SubmitSection } from './cart-page.styled';
import { OrderDetailsSection } from './components/order-details-section';
import { OrderItemsSection } from './components/order-items-section';

export const PriceContext = createContext(
  {} as { price: number; setPrice: React.Dispatch<React.SetStateAction<number>> }
);

export function CartPage() {
  const [price, setPrice] = useState(0);

  return (
    <CartPageContainer>
      <PriceContext.Provider value={{ price, setPrice }}>
        <CartPageGrid>
          <OrderDetailsSection />
          <OrderItemsSection />
        </CartPageGrid>
      </PriceContext.Provider>
      <SubmitSection>
        <span>Total price: {price}$</span>
        <SubmitButton form="order-details" type="submit" disabled={price === 0}>
          Submit
        </SubmitButton>
      </SubmitSection>
    </CartPageContainer>
  );
}
