import React from 'react';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';


function App() { // React.FC 장점 1. 기본적으로 children props가 탑재되어 있음 2. 값들이 자동완성이 됨
  return (
    <div>
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
}

export default App;
