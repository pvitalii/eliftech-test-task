import { useContext } from 'react';
import { useGetAllShops } from '../../../../modules/shop/hooks/useShopQuery';
import { ShopItem, ShopsHeading, ShopsList, ShopsSectionContainer } from './shops-section.styled';
import { ShopContext } from '../..';
import { useGetCartItemsByCart } from '../../../../modules/cart-item/hooks/useCartItemQuery';

export function ShopsSection() {
  const shopContext = useContext(ShopContext);
  const { data: shops } = useGetAllShops();
  const { data: cartItems } = useGetCartItemsByCart();

  const switchShop = (shopId: number) => {
    shopContext.setShop(shopId);
    localStorage.setItem('selectedShop', shopId.toString());
  };

  return (
    <ShopsSectionContainer>
      <ShopsHeading>Shops:</ShopsHeading>
      <ShopsList>
        <ShopItem
          className={shopContext.shop === 0 ? 'active' : 'inactive'}
          disabled={!!cartItems?.length}
          onClick={() => switchShop(0)}
        >
          All
        </ShopItem>
        {shops?.map((shop) => (
          <li key={shop.id}>
            <ShopItem
              className={shopContext.shop === shop.id ? 'active' : 'inactive'}
              disabled={
                !cartItems?.map((item) => item.product.shopId).includes(shop.id) &&
                !!cartItems?.length
              }
              onClick={() => switchShop(shop.id)}
            >
              {shop.name}
            </ShopItem>
          </li>
        ))}
      </ShopsList>
    </ShopsSectionContainer>
  );
}
