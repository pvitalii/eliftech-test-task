import styled from 'styled-components';
import { PageContainer } from '../../common/components/page-container';
import { BREAKPOINTS } from '../../common/consts/breakpoints.conts';

export const ShopContainer = styled(PageContainer)`
  display: flex;
  column-gap: ${(props) => props.theme.SPACES.l};

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    row-gap: ${(props) => props.theme.SPACES.l};
  }
`;
