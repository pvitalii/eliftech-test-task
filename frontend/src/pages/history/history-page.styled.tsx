import styled from 'styled-components';
import { PageContainer } from '../../common/components/page-container';

export const HistoryPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.SPACES.m};
`;
