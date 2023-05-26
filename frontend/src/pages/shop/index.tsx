import { ShopContainer } from './shop-page.styled';
import { ShopsSection } from './components/shops-section';
import { ProductsSection } from './components/products-section';
import { createContext } from 'react';
import { useState } from 'react';

export const ShopContext = createContext(
  {} as { shop: number; setShop: React.Dispatch<React.SetStateAction<number>> }
);

export function ShopPage() {
  const [shop, setShop] = useState(Number(localStorage.getItem('selectedShop')));

  return (
    <ShopContext.Provider value={{ shop, setShop }}>
      <ShopContainer>
        <ShopsSection />
        <ProductsSection />
      </ShopContainer>
    </ShopContext.Provider>
  );
}
