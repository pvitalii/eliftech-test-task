import { ChangeEvent, FormEvent, useState } from 'react';
import {
  HistoryForm,
  HistoryFormContainer,
  HistoryInput,
  HistoryInputField,
  HistorySearchButton
} from './history-form.styled';
import { useGetOrderByParams } from '../../../../modules/order/hooks/useOrderQuery';

export function HistoryFormSection() {
  const initialState = {
    email: '',
    phone: ''
  };

  const [formState, setFormState] = useState(initialState);

  const { refetch: refetchOrders } = useGetOrderByParams(formState.email, formState.phone);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      [event.target.name]: value
    });
  };

  const submitFunc = (event: FormEvent) => {
    event.preventDefault();
    refetchOrders();
  };

  return (
    <HistoryFormContainer>
      <HistoryForm onSubmit={submitFunc}>
        <HistoryInputField>
          Email
          <HistoryInput name="email" value={formState.email} onChange={handleInput} />
        </HistoryInputField>
        <HistoryInputField>
          Phone
          <HistoryInput name="phone" value={formState.phone} onChange={handleInput} />
        </HistoryInputField>
        <HistorySearchButton type="submit">Search</HistorySearchButton>
      </HistoryForm>
    </HistoryFormContainer>
  );
}
