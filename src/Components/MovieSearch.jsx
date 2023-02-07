import React, { useState,useEffect } from 'react'
import axios from 'axios'
function MovieSearch() {
    const [movieList,setMovieList] = useState([])
    const [query,setQuery] = useState('')
    const [adult,setAdult] = useState(false)
    const [page,setPage] = useState(1)
    const REACT_APP_TMDB_KEY = '4a16a312cc25534aac7bab9f0901fa3b'
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=${page}&include_adult=${adult}&query=${query}`)
        .then((res) => setMovieList(res.data.results))
        .catch(err => console.log(err))
        }, [query, page, adult]) 


    
  return (
    <div>
        <label>Search a Movie</label>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>

    </div>
  )
}

export default MovieSearch