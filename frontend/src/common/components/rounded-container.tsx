import styled from 'styled-components';

export const RoundedContainer = styled.div`
  padding: ${(props) => props.theme.SPACES.m} ${(props) => props.theme.SPACES.xl};
  border: 1px solid ${(props) => props.theme.COLORS.black};
  border-radius: 5px;
  height: revert;
`;
