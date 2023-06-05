import { useState } from 'react';
import './PosterCard.css';
import { useEffect } from 'react';

export default function PosterCard({imdbId, showTitle, showRating, series}){
    const[data, setData] = useState({});

    useEffect(()=>{
        loadCard();
    },[])

    async function loadCard(){
        let url;
        if(series){
            url = `http://localhost:8080/series/${imdbId}`;
        } else{
            url = `http://localhost:8080/movies/${imdbId}`;
        }
        let responseRaw = await fetch(url);
        let responseJson = await responseRaw.json();
        setData(responseJson);
    }

    return(
        <div className='poster-card'>
            <a href={`/details/${imdbId}`}><img src={data.poster} alt={`${data.title} + poster.`} /></a>
            {showTitle ? <p>{data.title} {showRating ? <span>{data.imdbRating}<i className='fa-regular fa-star'></i></span> : ""}</p> : ""}
        </div>
    );
}