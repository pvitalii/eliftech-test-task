import styled from 'styled-components';
import { RoundedButton } from '../../../../common/components/rounded-button';
import { RoundedContainer } from '../../../../common/components/rounded-container';

export const ShopsSectionContainer = styled(RoundedContainer)`
  padding: ${(props) => props.theme.SPACES.m} ${(props) => props.theme.SPACES.xl};
  border: 1px solid ${(props) => props.theme.COLORS.black};
  border-radius: 5px;
`;

export const ShopsHeading = styled.h1`
  font-size: ${(props) => props.theme.FONTS.SIZES.l};
  margin-bottom: ${(props) => props.theme.SPACES.s};
  text-align: center;
`;

export const ShopsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.SPACES.m};
`;

export const ShopItem = styled(RoundedButton)`
  padding: ${(props) => props.theme.SPACES.s} ${(props) => props.theme.SPACES.m};
  min-width: 100%;
  &:disabled {
    background-color: ${(props) => props.theme.COLORS.white};
    color: lightgrey;
    cursor: default;
  }
`;
