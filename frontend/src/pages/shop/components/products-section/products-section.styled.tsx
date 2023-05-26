import styled from 'styled-components';
import { ShopsSectionContainer } from '../shops-section/shops-section.styled';
import { RoundedButton } from '../../../../common/components/rounded-button';
import { BREAKPOINTS } from '../../../../common/consts/breakpoints.conts';

export const ProductsSectionContainer = styled(ShopsSectionContainer)`
  flex: 1;
  @media (min-width: ${BREAKPOINTS.sm}) {
    overflow-y: scroll;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.SPACES.m};

  @media (max-width: ${BREAKPOINTS.xxl}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${BREAKPOINTS.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: ${(props) => props.theme.SPACES.s};
  border: 1px solid ${(props) => props.theme.COLORS.black};
  border-radius: 5px;
  row-gap: ${(props) => props.theme.SPACES.s};
`;

export const ProductHeading = styled.h2`
  font-size: ${(props) => props.theme.FONTS.SIZES.m};
  text-align: center;
`;

export const ProductCardPrice = styled.p`
  text-align: center;
`;

export const AddToCartButton = styled(RoundedButton)`
  width: fit-content;
  padding: ${(props) => props.theme.SPACES.xs} ${(props) => props.theme.SPACES.m};
  margin: 0 auto;
`;

export const AddedButton = styled.button`
  width: fit-content;
  margin: 0 auto;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.COLORS.green};
  color: ${(props) => props.theme.COLORS.white};
  padding: ${(props) => props.theme.SPACES.xs} ${(props) => props.theme.SPACES.m};
`;
