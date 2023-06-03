import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MoviePage from './components/MoviePage';
import Navigation from './components/Navigation';
import HeroPage from './components/HeroPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='details/:id' element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
