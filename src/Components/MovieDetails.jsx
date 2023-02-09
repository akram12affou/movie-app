import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../styles/MovieDetails.css'
import {useParams} from 'react-router-dom'
function MovieDetails() {
    const REACT_APP_TMDB_KEY = '4a16a312cc25534aac7bab9f0901fa3b'
    const [movie, setMovie] = useState([])
    const [loading,setLoading] = useState(false)
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_TMDB_KEY}&language=en-US`)
        .then((res) => setMovie(res.data))
        .then((res) => setLoading(false))
        .catch(err => console.log(err))
    },[])
    console.log(movie)
  return (
    <div>
        {loading ? <p>loading...</p> : 
        <>
        {[movie]?.map((e) => {
            return(
                <div class='Movie-details'>
                    <div class='moviedetails-img'>
                        <img src={`https://image.tmdb.org/t/p/w300${e.poster_path}`} alt="" />
                    </div>
                    <div>
                        <h1>{e.original_title}</h1>
                        <span>{e.overview}</span>
                        <p>{e.vote_average}</p>
                        <p>{e.release_date}</p>
                        <p>home page: {e.homepage}</p>
                    </div>
                </div>
            )
        })
    }
        </>
        
        }</div>
  )
}

export default MovieDetails