import { useContext } from 'react';
import { useGetAllProducts } from '../../../../modules/product/hooks/useProductQuery';
import {
  AddToCartButton,
  AddedButton,
  ProductCard,
  ProductCardPrice,
  ProductHeading,
  ProductsGrid,
  ProductsSectionContainer
} from './products-section.styled';
import { ShopContext } from '../..';
import { useCreateCartItem } from '../../../../modules/cart-item/hooks/useCartItemMutation';
import { useGetCartItemsByCart } from '../../../../modules/cart-item/hooks/useCartItemQuery';

export function ProductsSection() {
  const shopContext = useContext(ShopContext);
  const { data } = useGetAllProducts({
    shopId: shopContext.shop === 0 ? undefined : shopContext.shop
  });
  const { mutate } = useCreateCartItem();
  const { data: cartItems } = useGetCartItemsByCart();

  const addToCartClick = (productId: number, shopId: number) => {
    mutate({ count: 1, productId });
    shopContext.setShop(shopId);
    localStorage.setItem('selectedShop', shopId.toString());
  };

  return (
    <ProductsSectionContainer>
      <ProductsGrid>
        {data?.map((product) => {
          return (
            <ProductCard key={product.id}>
              <img src={process.env.REACT_APP_SERVER_URL + `/${product.image}`} alt="product" />
              <ProductHeading>{product.name}</ProductHeading>
              <ProductCardPrice>{product.price}$</ProductCardPrice>
              {cartItems?.map((item) => item.productId).includes(product.id) ? (
                <AddedButton disabled>Added in cart</AddedButton>
              ) : (
                <AddToCartButton
                  onClick={() => {
                    addToCartClick(product.id, product.shopId);
                  }}
                >
                  Add to cart
                </AddToCartButton>
              )}
            </ProductCard>
          );
        })}
      </ProductsGrid>
    </ProductsSectionContainer>
  );
}
