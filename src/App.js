import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MyPortfolio from './components/Home/MyPortfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
