import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState} from "react";
import MoviePage from './components/MoviePage';
import Navigation from './components/Navigation';
import HeroPage from './components/HeroPage';

function App() {
  const[movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch('https://omdbapi.com/?apikey=3207aadb&s=Avengers')
    .then((response) => response.json())
    .then((data) => setMovies(data.Search));
  }, []);

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
