import Slider from './Slider';
import { useEffect, useState } from "react";
import PosterCard from './PosterCard';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/movies')
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <div className="movies-page">
            <div className='slider'>
                <Slider imdbId="tt7286456" />
                <Slider imdbId="tt0468569" />
                <Slider imdbId="tt10151854" />
                <Slider imdbId="tt10403420" />
            </div>
            <div className='category'>
                <h1>Recently added</h1>
                <div className='poster-slider'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbId} />
                    })}
                </div>
            </div>
            <div className='category'>
                <h1>Top Rated</h1>
                <div className='poster-slider big'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbId} showTitle showRating />
                    })}
                </div>
            </div>
        </div>
    );
}