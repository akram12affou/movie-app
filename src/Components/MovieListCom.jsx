import React, { useEffect, useState } from 'react'
import MovieCart from './MovieCart'
import axios from 'axios'
import useMovie from '../Context/MovieContext';
function MovieListCom() {
    const { MovieList, setMovieList } = useMovie();
    const [adult, setAdult] = useState(false)
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const REACT_APP_TMDB_KEY = '4a16a312cc25534aac7bab9f0901fa3b'
    useEffect(() => {

        if (MovieList.length !== 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [MovieList])
    useEffect(() => {
        if (page == 1) {
            setDisabled(true)

        } else {
            setDisabled(false)
        }
    }, [page])
    const handlebuttons = (e) => {
        if (e == '-') {
            let pageminusone = page - 1
            setPage(pageminusone)
        }
        if (e == '+') {
            let pageplusone = page + 1
            setPage(pageplusone)
        }
    }
    useEffect(() => { setPage(1) }, [query])
    useEffect(() => {

        if (query == '') {
            setMovieList([])
            return;
        }
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=${page}&include_adult=${adult}&query=${query}`)
            .then((res) => setMovieList(res.data.results))
            .catch(err => console.log(err))
    }, [query, page, adult])
    return (
        <>


            <input placeholder="search a movie ..." type="text" onChange={(e) => setQuery(e.target.value)} />
            <br />
            {show && (
                <>
                    <button onClick={() => handlebuttons('-')} disabled={disabled}> - </button>
                    {page}
                    <button onClick={() => handlebuttons('+')}> + </button>
                    <input type="checkbox" checked={adult} onChange={() => setAdult(!adult)} />
                    <label>for adult</label>
                </>
            )}
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