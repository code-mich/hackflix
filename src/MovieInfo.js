// import axios so that we can make some async requests

import axios from "axios";
// import useState AND useEffect Hooks
import { useState, useEffect } from "react";

// we want to use the movie ID which is currently in the URL ( at which this component renders ) within our axios call
// in order to grab the info from a URL (when using Router), we can use the useParams Hook
import { useParams } from 'react-router-dom'


function MovieInfo(props) {
    console.log(props)

    // lets call the useParams Hook and see what it returns
    // console.log(useParams());

    // call useParams Hook and extract the movieId property from within the params object it returns
    const { movieId: movie_id } = useParams();

    // initialize state to represent the movie details which will be returned to us from the API
    const [details, setDetails] = useState({});

    // define a side effect which will fetch data about the movie after the component has first rendered
    useEffect(() => {
        // use axios to make a request to the movie id endpoint
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: '19d5380cecc9aeeb69a741685bf6c779'
            }
        }).then((movieInfo) => {
            setDetails(movieInfo.data)
        })

        // specify that this side effect should only run one time after the component has first rendered
    }, [movie_id]);

    return (
        <section className="poster">
            <div className="description">
                {/* render the movie tagline, summary, and title */}
                <h2>{details.title}</h2>
                <h3>{details.tagline}</h3>
                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
                {/* render the movie poster */}
                <img
                    src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    alt={`A poster for the movie ${details.title}`}
                />
            </div>
        </section>
    )

}

export default MovieInfo