import React from 'react';
import './App.scss';
import { CarsList } from './components/CarsList';
import { FormSubscribe } from './components/FormSubscribe';
import { Header } from './components/Header';
import { Questions } from './components/Questions';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <CarsList />
        <FormSubscribe />
        <Questions />
      </main>

    </div>
  );
};
