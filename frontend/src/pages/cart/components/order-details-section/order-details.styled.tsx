import styled from 'styled-components';
import { RoundedContainer } from '../../../../common/components/rounded-container';
import { BREAKPOINTS } from '../../../../common/consts/breakpoints.conts';

export const OrderDetailsContainer = styled(RoundedContainer)`
  @media (max-width: ${BREAKPOINTS.md}) {
    padding: ${(props) => props.theme.SPACES.s};
  }
  flex: 1;
`;
