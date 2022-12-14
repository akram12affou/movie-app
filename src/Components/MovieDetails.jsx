import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function MovieDetails() {
    const [movie,setMovie] = useState([])
    const {id} = useParams()
    const REACT_APP_TMDB_KEY = '4a16a312cc25534aac7bab9f0901fa3b'
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_TMDB_KEY}`)
        .then((res) => setMovie(res.data))
        .catch(err => console.log(err))
    }
    ,[])
    console.log(movie,id)
  return (<>{[movie].map((e) => {
    return(
        <p>{e.title}</p>
    )
  }) }</>
    // <div>{movie.map((e) => {
    //     return(
            
    //         <p>{e.original_title}</p>
    //     )
    // })}</div>
  )
}

export default MovieDetails