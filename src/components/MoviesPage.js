import './MoviesPage.css'
import MoviesSlider from './MoviesSlider';
import { useEffect, useState } from "react";
import PosterCard from './PosterCard';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://omdbapi.com/?apikey=3207aadb&s=Avengers')
            .then((response) => response.json())
            .then((data) => setMovies(data.Search));
    }, []);

    return (
        <div className="movies-page">
            <div className='slider-wrapper'>
                <div className='slider'>
                    <MoviesSlider
                        backgroundImage="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
                        title="Joker"
                        plot="Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comic whose descent into mental illness and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City. Robert De Niro, Zazie Beetz and Frances Conroy appear in supporting roles."
                        runtime="161 min"
                        imdbRating="8.9"
                        actors="Joaquinn Phoenix, Some Actor"
                        genre="Mystery, Crime"
                        year="2019"
                        trailer="https://www.youtube.com/embed/rgrWXTz_8eU"
                    />
                    <MoviesSlider
                        backgroundImage="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A58F095E5F07824A9D3C789C0956F5B769A3626B08795A448CC03E1DEC3ED171/scale?width=1200&aspectRatio=1.78&format=jpeg"
                        title="Black Panther"
                        plot="T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
                        runtime="164 min"
                        imdbRating="7.3"
                        actors="Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o"
                        genre="Action, Adventure, Sci-Fi"
                        year="2018"
                        trailer="https://www.youtube.com/embed/xjDjIWPwcPU"
                    />
                    <MoviesSlider
                        backgroundImage="https://filmfare.wwmindia.com/content/2023/mar/shazamfuryofthegods41678965222.jpg"
                        title="Shazam! Fury of the Gods"
                        plot="The film continues the story of teenage Billy Batson who, upon reciting the magic word 'SHAZAM!' is transformed into his adult Super Hero alter ego, Shazam.."
                        runtime="131 min"
                        imdbRating="6.0"
                        actors="Zachary Levi, Asher Angel, Jack Dylan Grazer"
                        genre="Action, Adventure, Comedy"
                        year="2023"
                        trailer="https://www.youtube.com/embed/ZwFOa3qV5Sk"
                    />
                </div>
                <div className='slider-nav'>
                    <button></button>
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
                <h1>Top Rated</h1>
                <div className='poster-slider big'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbID} showTitle showRating />
                    })}
                </div>
            </div>
            <div className='category'>
                <h1>Love is in the air</h1>
                <div className='poster-slider'>
                    {movies.map((movie) => {
                        return <PosterCard imdbId={movie.imdbID} />
                    })}
                </div>
            </div>
        </div>
    );
}