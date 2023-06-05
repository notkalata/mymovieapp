import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import Navigation from './components/Navigation';
import HeroPage from './components/HeroPage';
import MoviesPage from './components/MoviesPage';
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
          <Route path='details' element={<h1>You need to specify an ID!</h1>} />
          <Route path='details/:id' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
