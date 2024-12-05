import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPortfolio from './components/Home/MyPortfolio';

function App() {
  return (
    <div>
      <MyPortfolio />
    </div>
  );
}

export default App;
