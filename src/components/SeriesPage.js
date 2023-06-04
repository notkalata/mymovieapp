import './SeriesPage.css';
import SeriesSlider from './SeriesSlider';
import { useEffect, useState } from "react";
import PosterCard from './PosterCard';


export default function SeriesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://omdbapi.com/?apikey=3207aadb&s=Avengers')
            .then((response) => response.json())
            .then((data) => setMovies(data.Search));
    }, []);

    return (
        <div className='series-page'>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <SeriesSlider
                        backgroundImage="https://flxt.tmsimg.com/assets/p185554_b_h10_bk.jpg"
                        title="The Big Bang Theory"
                        plot="A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory."
                        actors="Johnny Galecki, Jim Parsons, Kaley Cuoco"
                        genre="Sitcom, Comedy"
                    />
                    <SeriesSlider
                        backgroundImage="https://ntvb.tmsimg.com/assets/p8282918_b_h8_bn.jpg?w=960&h=540"
                        title="The Walking Dead"
                        plot="Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive."
                        actors="Andrew Lincoln, Norman Reedus, Melissa McBride"
                        genre="Horror, Thriller, Drama"
                    />
                </div>
                <div className='slider-nav'>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className='category'>
                <h1>Recently added</h1>
                <div className='poster-slider'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbID} />
                    })}
                </div>
            </div>
            <div className='category'>
                <h1>Top rated</h1>
                <div className='poster-slider big'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbID} showTitle showRating />
                    })}
                </div>
            </div>
            <div className='category'>
                <h1>Zombies?</h1>
                <div className='poster-slider'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbID} showTitle showRating />
                    })}
                </div>
            </div>
        </div>
    );
}