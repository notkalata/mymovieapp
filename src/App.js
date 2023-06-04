import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MoviePage from './components/MoviePage';
import Navigation from './components/Navigation';
import HeroPage from './components/HeroPage';
import MoviesPage from './components/MoviesPage';
import PosterCard from './components/PosterCard';
import SeriesPage from './components/SeriesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='series' element={<SeriesPage />} />
          <Route path='details/:id' element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
