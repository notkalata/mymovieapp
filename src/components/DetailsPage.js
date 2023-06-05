import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import './DetailsPage.css';

export default function DetailsPage(){
    let {id} = useParams();

    const[data, setData] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:8080/series/${id}`)
            .then((responseRaw) => responseRaw.json())
            .then((responseJson) => setData(responseJson));
    }, []);
    
    return(
        <div className="details-page">
            <div className="details-container">
                <div className="details-cover">
                    <h2 id="title">{data.title}</h2>
                    <img src={data.poster} alt={`${data.title} poster`} />
                    <h3>X | <span>{data.imdbRating} <i className="fa-regular fa-star"></i></span></h3>
                </div>
                <div className="details-about">
                    <h3>Plot</h3>
                    <p id="plot">{data.plotLong}</p>
                    <h3>Actors</h3>
                    <p>{data.actors}</p>
                    <div className="details-actions">
                        <button><i class="fa-solid fa-play"></i> Play Trailer</button>
                        <button><i class="fa-solid fa-bookmark"></i> Add To Favourites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}