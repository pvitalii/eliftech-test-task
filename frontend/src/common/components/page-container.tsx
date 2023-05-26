import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: ${(props) => props.theme.SPACES.l} ${(props) => props.theme.SPACES.xl};
  height: calc(100vh - 100px);
`;
