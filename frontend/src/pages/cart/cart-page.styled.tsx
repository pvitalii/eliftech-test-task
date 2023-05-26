import styled from 'styled-components';
import { PageContainer } from '../../common/components/page-container';
import { RoundedButton } from '../../common/components/rounded-button';
import { BREAKPOINTS } from '../../common/consts/breakpoints.conts';

export const CartPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.SPACES.l};
  height: fit-content;
`;

export const CartPageGrid = styled.div`
  display: flex;
  gap: ${(props) => props.theme.SPACES.l};
  flex: 1;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.SPACES.l};
  }
`;

export const SubmitSection = styled.div`
  display: flex;
  column-gap: ${(props) => props.theme.SPACES.m};
  justify-content: flex-end;
  align-items: center;
`;

export const SubmitButton = styled(RoundedButton)`
  padding: ${(props) => props.theme.SPACES.s} ${(props) => props.theme.SPACES.l};
  &:disabled {
    background-color: ${(props) => props.theme.COLORS.white};
    color: lightgrey;
    cursor: default;
  }
`;
