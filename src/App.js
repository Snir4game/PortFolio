import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MyPortfolio from './Components/Home/MyPortfolio';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MyPortfolio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
