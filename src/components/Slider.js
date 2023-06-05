import { useState, useEffect } from "react";

export default function Slider({imdbId, series}) {
    const[data, setData] = useState({});

    useEffect(()=>{
        loadData();
    },[])

    async function loadData(){
        let url = `http://localhost:8080/movies/${imdbId}`;

        if(series)
            url = `http://localhost:8080/series/${imdbId}`;

        let responseRaw = await fetch(url);
        let responseJson = await responseRaw.json();
        setData(responseJson);
    }

    return (
        <div className='slider-item' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url(${data.banner})` }}>
            <div className='slider-text'>
                <div className='display-cover'>
                    <h1>{data.title}</h1>
                    <p>{data.plotShort}</p>
                    <h3>{series ? `${data.seasons} Seasons (${data.episodesCount} Episodes)` : 
                    `${data.runtime}`} | <span>{data.imdbRating} <i className="fa-regular fa-star"></i></span></h3>
                </div>
                <div className='display-about'>
                    <h3>Actors</h3>
                    <p>{data.actors && data.actors.join(", ")}</p>
                    <h3>Genre</h3>
                    <p>{data.genre && data.genre.join(", ")}</p>
                    <h3>{series ? "Airing" : "Release Year"}</h3>
                    <p>{series ? `${data.status} (${data.year})` : data.year}</p>
                    <div className="details-actions">
                        <button><i class="fa-solid fa-play"></i> Play Trailer</button>
                        <button onClick={() => window.open(series ? `/series/${data.imdbId}` : `/movies/${data.imdbId}`,'_self')}><i class="fa-solid fa-tv"></i> Details</button>
                    </div>
                    <img src={data.banner} alt={`${data.title} + banner.`} />
                </div>
            </div>
        </div>
    );
}