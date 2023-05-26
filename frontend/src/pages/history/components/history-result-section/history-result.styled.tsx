import styled from 'styled-components';
import { RoundedContainer } from '../../../../common/components/rounded-container';
import {
  OrderItemCard,
  OrderItemInfoBox
} from '../../../cart/components/order-items-section/order-items.styled';
import { BREAKPOINTS } from '../../../../common/consts/breakpoints.conts';

export const HistoryResultContainer = styled(RoundedContainer)`
  padding-inline: ${(props) => props.theme.SPACES.s};
  flex: 1;
`;

export const HistoryResultBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.SPACES.s};
`;

export const HistoryResultCard = styled(RoundedContainer)`
  display: flex;
  justify-items: space-between;
  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    align-items: center;
    row-gap: ${(props) => props.theme.SPACES.s};
  }
`;

export const HistoryOrderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.SPACES.xs};
  flex: 1;

  @media (max-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HistoryOrderCard = styled(OrderItemCard)``;

export const HistoryOrderInfoBox = styled(OrderItemInfoBox)`
  font-size: ${(props) => props.theme.FONTS.SIZES.s};
  text-align: center;
`;

export const HistoryTotalPrice = styled.p`
  flex: 0.25;
  margin: auto;
  text-align: center;
`;
