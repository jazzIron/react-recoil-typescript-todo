import styled from '@emotion/styled';
import { CardList } from '../features/CardList';

export function MainPage() {
  return (
    <MainPageWrapper>
      <CardList />
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.div`
  height: 100vh;
  position: absolute;
  transform: translate(50%, 0%);
`;
