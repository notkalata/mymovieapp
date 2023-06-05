import Slider from './Slider';
import { useEffect, useState } from "react";
import PosterCard from './PosterCard';

export default function SeriesPage() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/series')
            .then((response) => response.json())
            .then((data) => setSeries(data));
    }, []);

    return (
        <div className='series-page'>
            <div className="slider">
                <Slider imdbId="tt1520211" series />
            </div>
            <div className='category'>
                <h1>Recently added</h1>
                <div className='poster-slider'>
                    {series.map((serie) => {
                        return <PosterCard imdbId={serie.imdbId} series />
                    })}
                </div>
            </div>
            <div className='category'>
                <h1>Top Rated</h1>
                <div className='poster-slider big'>
                    {series.map((serie) => {
                        return <PosterCard imdbId={serie.imdbId} series showRating showTitle />
                    })}
                </div>
            </div>
        </div>
    );
}