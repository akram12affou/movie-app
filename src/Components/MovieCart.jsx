import React from 'react'

function MovieCart({film}) {
    const {id , adult,backdrop_path,original_language
,overview, poster_path ,release_date,title,vote_average} = film


 
  return (
    <div>
       <p>{title}</p>
       <button>add to watched</button>
       <button>add to favorite</button>
       <hr />
    </div>
  )
}

export default MovieCart