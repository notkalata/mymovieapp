/* This is the class, which holds the big slider in the MOVIES page. */

export default function MoviesSlider({backgroundImage, title, plot, runtime, imdbRating, actors, genre, year, trailer}) {
    return (
        <div className='slider-item' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${backgroundImage})` }}>
            <div className='slider-text'>
                <section className='display-cover'>
                    <h1>{title}</h1>
                    <p>{plot}</p>
                    <h3>{runtime} | <span>{imdbRating} <i className="fa-regular fa-star"></i></span></h3>
                </section>
                <section className='display-about'>
                    <h3>Actors</h3>
                    <p>{actors}</p>
                    <h3>Genre</h3>
                    <p>{genre}</p>
                    <h3>Release Year</h3>
                    <p>{year}</p>
                    <div className="movie-actions">
                        <button><i class="fa-solid fa-tv"></i> Details</button>
                    </div>
                    <iframe width="560px" height="320px" src={trailer} title={`${title} YouTube trailer.`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </div>
        </div>
    );
}