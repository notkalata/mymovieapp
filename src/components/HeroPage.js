import './HeroPage.css';
import { useEffect, useState } from "react";
import PosterCard from './PosterCard';

export default function HeroPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/movies')
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <div className="hero-page">
            <div className="hero-landing">
                <h1>Subscribe to our newsletter and stay updated.</h1>
                <div className='hero-form'>
                    <input type="email" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className='category'>
                <h1>Upcoming</h1>
                <div className='poster-slider'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbId} showTitle />
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