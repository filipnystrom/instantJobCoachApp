import './App.css';
import MainContainer from './components/MainContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <MainContainer /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
