import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import './MoviePage.css';

export default function MoviePage(){
    let {id} = useParams();

    const[movie, setMovie] = useState({});
    const[recommended, setRecommended] = useState([]);

    useEffect(()=>{
      displayMovie();
      updateRecommended();
    }, []);

    async function displayMovie(){
        const response = await fetch(`https://omdbapi.com/?apikey=3207aadb&i=${id}`);
        const data = await response.json();
        if(data.Response === "False"){
            alert("No movie exists with this ID");
        }
        else{
            setMovie(data);
        }
    }
    async function updateRecommended(){
        const response = await fetch(`https://omdbapi.com/?apikey=3207aadb&s=Avengers`);
        const data = await response.json();
        setRecommended(data.Search);
    }
    
    return(
        <div className="movie-page">
            <div className="movie-container">
                <div className="movie-cover">
                    <h2 id="title">{movie.Title}</h2>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Runtime} | <span>{movie.imdbRating} <i className="fa-regular fa-star"></i></span></h3>
                </div>
                <div className="movie-about">
                    <h3>Plot</h3>
                    <p id="plot">{movie.Plot}</p>
                    <h3>Actors</h3>
                    <p>{movie.Actors}</p>
                    <div className="movie-actions">
                        <button><i class="fa-solid fa-play"></i> Play Trailer</button>
                        <button><i class="fa-solid fa-bookmark"></i> Add To Favourites</button>
                    </div>
                </div>
            </div>
            <h2>People also search for:</h2>
            <div className="container"> 
                {recommended.map((rec) => {
                if (rec.imdbID === movie.imdbID){

                } else {
                    return <div className='movie'>
                        <a href={`/details/${rec.imdbID}`}><img src={rec.Poster} alt="Movie poster" /></a>
                    </div>
                }
                })}
            </div>
        </div>
    )
}