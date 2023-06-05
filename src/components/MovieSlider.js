/* This is the class, which holds the big slider in the MOVIES page. */

import { useState, useEffect } from "react";

export default function MovieSlider({imdbId}) {
    const[movie, setMovie] = useState({});

    useEffect(()=>{
        loadSlider();
    },[])

    async function loadSlider(){
        const response = await fetch(`http://localhost:8080/movies/${imdbId}`);
        const data = await response.json();
        setMovie(data);
    }

    return (
        <div className='slider-item' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url(${movie.banner})` }}>
            <div className='slider-text'>
                <section className='display-cover'>
                    <h1>{movie.title}</h1>
                    <p>{movie.plotShort}</p>
                    <h3>{movie.runtime} | <span>{movie.imdbRating} <i className="fa-regular fa-star"></i></span></h3>
                </section>
                <section className='display-about'>
                    <h3>Actors</h3>
                    <p>{movie.actors}</p>
                    <h3>Genre</h3>
                    <p>{movie.genre}</p>
                    <h3>Release Year</h3>
                    <p>{movie.year}</p>
                    <div className="details-actions">
                        <button><i class="fa-solid fa-tv"></i> Details</button>
                    </div>
                    <iframe src={movie.trailer} title={`${movie.title} YouTube trailer.`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </div>
        </div>
    );
}