import { useState } from 'react';
import './PosterCard.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PosterCard({imdbId, showTitle, showRating}){
    const[movie, setMovie] = useState({});

    useEffect(()=>{
        loadCard();
    },[])

    async function loadCard(){
        const response = await fetch(`https://omdbapi.com/?apikey=3207aadb&i=${imdbId}`);
        const data = await response.json();
        setMovie(data);
    }

    return(
        <div className='poster-card'>
            <a href={`/details/${movie.imdbID}`}><img src={movie.Poster} alt={`${movie.Title} + poster.`} /></a>
            {showTitle ? <p>{movie.Title} {showRating ? <span>{movie.imdbRating}<i className='fa-regular fa-star'></i></span> : ""}</p> : ""}
        </div>
    );
}