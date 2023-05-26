import { HistoryFormSection } from './components/history-form-section';
import { HistoryPageContainer } from './history-page.styled';
import { HistoryResultSection } from './components/history-result-section';

export function HistoryPage() {
  return (
    <HistoryPageContainer>
      <HistoryFormSection />
      <HistoryResultSection />
    </HistoryPageContainer>
  );
}
