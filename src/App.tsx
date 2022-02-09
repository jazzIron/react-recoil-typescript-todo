import { MainPage } from './pages/MainPage';
import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage />
      </Suspense>
    </RecoilRoot>
  );
}
export default App;
