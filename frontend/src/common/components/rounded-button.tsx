import styled from 'styled-components';

export const RoundedButton = styled.button`
  background-color: ${(props) =>
    props.className === 'active' ? props.theme.COLORS.black : props.theme.COLORS.white};
  color: ${(props) =>
    props.className === 'active' ? props.theme.COLORS.white : props.theme.COLORS.black};
  border: 1px solid ${(props) => props.theme.COLORS.black};
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.COLORS.black};
    color: ${(props) => props.theme.COLORS.white};
    transition: 0.75s;
  }
  cursor: pointer;
  text-decoration: none;
`;
