/* This is the class, which holds the big slider in the SERIES page. */

export default function SeriesSlider({backgroundImage, title, plot, actors, genre}) {
    return (
        <div className='slider-item' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${backgroundImage})` }}>
            <div className='slider-text'>
                <section className='display-cover'>
                    <h1>{title}</h1>
                    <p>{plot}</p>
                    <h3>4 seasons | 81 episodes</h3>
                </section>
                <section className='display-about'>
                    <h3>Actors</h3>
                    <p>{actors}</p>
                    <h3>Genre</h3>
                    <p>{genre}</p>
                    <h3>Finished airing</h3>
                    <p>Yes</p>
                    <div className="movie-actions">
                        <button><i class="fa-solid fa-play"></i> Play Trailer</button>
                        <button><i class="fa-solid fa-tv"></i> Details</button>
                    </div>
                    <img src={backgroundImage} alt="Alt." />
                </section>
            </div>
        </div>
    );
}