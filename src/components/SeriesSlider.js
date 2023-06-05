/* This is the class, which holds the big slider in the SERIES page. */

import { useState, useEffect } from "react";

export default function SeriesSlider({imdbId}) {
    const[series, setSeries] = useState({});

    useEffect(()=>{
        loadSlider();
    },[])

    async function loadSlider(){
        const response = await fetch(`http://localhost:8080/series/${imdbId}`);
        const data = await response.json();
        setSeries(data);
    }

    return (
        <div className='slider-item' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url(${series.banner})` }}>
            <div className='slider-text'>
                <section className='display-cover'>
                    <h1>{series.title}</h1>
                    <p>{series.plotShort}</p>
                    <h3>{series.seasons} seasons | {series.episodesCount} episodes</h3>
                </section>
                <section className='display-about'>
                    <h3>Actors</h3>
                    <p>{series.actors}</p>
                    <h3>Genre</h3>
                    <p>{series.genre}</p>
                    <h3>Airing</h3>
                    <p>{series.status}</p>
                    <div className="details-actions">
                        <button><i class="fa-solid fa-play"></i> Play Trailer</button>
                        <button><i class="fa-solid fa-tv"></i> Details</button>
                    </div>
                    <img src={series.banner} alt={`${series.title} + banner.`} />
                </section>
            </div>
        </div>
    );
}