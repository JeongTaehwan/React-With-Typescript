import React from 'react';
import Greetings from './Greeting';

const App: React.FC = () => { // React.FC 장점 1. 기본적으로 children props가 탑재되어 있음 2. 값들이 자동완성이 됨
  const onClick = (name: string) => {
    console.log(name);
  };

  return (
    <Greetings name="리액트" optional="만나서 반갑습니다." onClick={onClick} />
  );
}

export default App;
