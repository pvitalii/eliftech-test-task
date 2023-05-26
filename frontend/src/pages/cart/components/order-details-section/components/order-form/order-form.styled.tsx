import styled from 'styled-components';
import { Input } from '../../../../../../common/components/input';
import { BREAKPOINTS } from '../../../../../../common/consts/breakpoints.conts';

export const OrderDetailsForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.SPACES.m};
  padding: ${(props) => props.theme.SPACES.m} 0;
`;
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.FONTS.SIZES.s};
  margin: 0 auto;
  max-width: 100%;
`;

export const OrderFormInput = styled(Input)`
  font-size: ${(props) => props.theme.FONTS.SIZES.m};
  padding-inline: ${(props) => props.theme.SPACES.s};
  @media (max-width: ${BREAKPOINTS.md}) {
    padding-inline: ${(props) => props.theme.SPACES.xs};
  }
`;
