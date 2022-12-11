import React, { useEffect, useState } from 'react'
import MovieCart from './MovieCart'
import axios from 'axios'
import useMovie from '../Context/MovieContext';
function MovieListCom() {
    const { MovieList,  setMovieList } = useMovie();
    const [query, setQuery] = useState('')
    const REACT_APP_TMDB_KEY = '4a16a312cc25534aac7bab9f0901fa3b'
    useEffect(() => {
        if (query == ''){
            setMovieList([])
            return;
        }

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
            .then((res) => setMovieList(res.data.results))
            .catch(err => console.log(err))
    }, [query])
    return (
        <>
            <input placeholder="search a movie ..." type="text" onChange={(e) => setQuery(e.target.value)} />
            {MovieList.map((film) => {
                return (
                    <div key={film.id} >
                        <MovieCart film={film} />
                    </div>
                )
            })}
        </>
    )
}

export default MovieListCom