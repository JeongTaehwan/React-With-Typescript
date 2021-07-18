import React from 'react';
import MyForm from './MyForm';

function App() { // React.FC 장점 1. 기본적으로 children props가 탑재되어 있음 2. 값들이 자동완성이 됨
  const onSubmit = (form: { name: string, description: string }) => {
    console.log(form);
  }
  return (
    <div>
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
