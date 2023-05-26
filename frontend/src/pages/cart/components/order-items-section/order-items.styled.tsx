import styled from 'styled-components';
import { RoundedContainer } from '../../../../common/components/rounded-container';
import { Input } from '../../../../common/components/input';
import { BREAKPOINTS } from '../../../../common/consts/breakpoints.conts';

export const OrderItemsContainer = styled(RoundedContainer)`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.SPACES.s};
  @media (min-width: ${BREAKPOINTS.sm}) {
    max-height: 500px;
    overflow-y: scroll;
  }
  flex: 1;
`;

export const OrderItemCard = styled(RoundedContainer)`
  display: flex;
  padding: ${(props) => props.theme.SPACES.s} ${(props) => props.theme.SPACES.m};
  column-gap: ${(props) => props.theme.SPACES.l};

  @media (max-width: ${BREAKPOINTS.xl}) {
    flex-direction: column;
    row-gap: ${(props) => props.theme.SPACES.l};
    align-items: center;
  }
`;

export const OrderItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: ${(props) => props.theme.SPACES.s};
  flex: 2;
`;

export const OrderItemCountBox = styled.div`
  display: flex;
`;

export const CountButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.FONTS.SIZES.l};
`;

export const OrderItemCount = styled(Input)`
  border: 1px solid ${(props) => props.theme.COLORS.black};
  border-radius: 5px;
  text-align: center;
  width: 60px;
`;
