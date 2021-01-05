import React from 'react';
import './App.css';
import { NamePage } from './components/NamePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Typescript with React</h1>
      <NamePage />
    </div>
  );
};

export default App;
