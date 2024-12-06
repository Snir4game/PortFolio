import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPortfolio from './components/Home/MyPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
