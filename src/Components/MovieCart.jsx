import React from 'react'
import useMovie from '../Context/MovieContext'
import { Link } from 'react-router-dom';
import { useState} from 'react';
function MovieCart({film}) {
  console.log(film)
  const {addToWatched,addToFavorite}  = useMovie()
    const {id , adult,backdrop_path,original_language
,overview, poster_path ,release_date,title,vote_average} = film
const addtowatched =() => {
  addToWatched(title)
}
const addTfavorite = (title) => {
  addToFavorite(title)
}
  return (
    <div>
       <Link to={`movie/${id}`}><p>{title}</p></Link>
       <button onClick={( ) => addtowatched(title)} >add to watched</button>
       <button onClick={() => addTfavorite(title)}>add to favorite</button>
  
       <hr />
    </div>
  )
}

export default MovieCart