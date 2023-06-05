import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import './DetailsPage.css';

export default function SeriesDetailsPage(){
    let {id} = useParams();

    const[data, setData] = useState({});
    const[episodes, setEpisodes] = useState([]);

    useEffect(()=>{
        loadData();
    },[])

    async function loadData(){
        let responseRaw = await fetch(`http://localhost:8080/series/${id}`);
        let responseJson = await responseRaw.json();
        setData(responseJson);
        setEpisodes(responseJson.episodes);
    }
    
    return(
        <div className="details-page">
            <div className="details-container">
                <div className="details-cover">
                    <h2 id="title">{data.title}</h2>
                    <img src={data.poster} alt={`${data.title} poster`} />
                    <h3>{data.seasons} Seasons ({data.episodesCount} Episodes) | <span>{data.imdbRating} <i className="fa-regular fa-star"></i></span></h3>
                </div>
                <div className="details-about">
                    <h3>Plot</h3>
                    <p>{data.plotLong}</p>
                    <h3>Actors</h3>
                    <p>{data.actors && data.actors.join(", ")}</p>
                    <div className="details-actions">
                        <button><i class="fa-solid fa-play"></i> Play Trailer</button>
                        <button><i class="fa-solid fa-bookmark"></i> Add To Favourites</button>
                    </div>
                </div>
            </div>
            <h1>Episodes</h1>
            <div className="episodes-container">
                {episodes.map((episode) => {
                    return <div className="episode-display">
                        <img src={episode.image} alt={`${episode.title} episode image.`} />
                        <div>
                            <h3>{`S${episode.season}E${episode.number}: ${episode.title}`}</h3>
                            <p>{episode.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}