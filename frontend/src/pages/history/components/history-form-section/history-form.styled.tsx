import styled from 'styled-components';
import { RoundedContainer } from '../../../../common/components/rounded-container';
import {
  InputField,
  OrderDetailsForm,
  OrderFormInput
} from '../../../cart/components/order-details-section/components/order-form/order-form.styled';
import { RoundedButton } from '../../../../common/components/rounded-button';

export const HistoryFormContainer = styled(RoundedContainer)``;

export const HistoryForm = styled(OrderDetailsForm)``;

export const HistoryInputField = styled(InputField)`
  margin: 0 auto;
  max-width: 100%;
`;

export const HistoryInput = styled(OrderFormInput)``;

export const HistorySearchButton = styled(RoundedButton)`
  margin: 0 auto;
  padding: ${(props) => props.theme.SPACES.xs} ${(props) => props.theme.SPACES.m};
`;
