// 1. import the axios library
import axios from "axios"
// 2. import the useState Hook AND the useEffect Hook
import { useState, useEffect } from 'react'

// in order to recreate the behaviour of an anchor with the added benefit/logic of React Router, we can use the Link component
import { Link } from 'react-router-dom'

function MovieCatalogue() {

    console.log('catalogue has rendered')

    // 3. intialize state to keep track of the movie data which will be returned from the API
    const [movies, setMovies] = useState([]);

    // 4. initialize a useEffect to run the side effect of fetching data from the movie API (this side effect is running a single time on page load)
    useEffect(() => {

        console.log('side effect is running')

        // 5. make an async request to the TMDB API using axios
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '19d5380cecc9aeeb69a741685bf6c779',
                include_adult: false
            }
        }).then((theMovies) => {
            setMovies(theMovies.data.results)
        })

        // 6. save the returned data within state

        // API Key: 19d5380cecc9aeeb69a741685bf6c779
        // we only want the side effect to run ONCE, so make sure to add an empty dependency array
    }, []);

    return (
        <section>

            <h2>Here are your viewing options:</h2>

            <ul className="catalogue">


                {/* // 7. map through state and return a movie for each movie present in the returned API data */}

                {
                    movies.map((movie) => {
                        return (
                            // we want to make the posters clickable and navigate to a unique URL to represent each specific movie
                            <Link to={`/${movie.id}`}>
                                <li key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt={`A poster for the movie ${movie.title}`}
                                    />
                                </li>
                            </Link>
                        )
                    })
                }

            </ul>
        </section>
    )
}

export default MovieCatalogue;