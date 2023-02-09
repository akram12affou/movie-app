import React from 'react'
import '../styles/WatchedList.css'
import {useSelector, useDispatch} from 'react-redux'
function WatchedList() {
  const watchedList = useSelector(state => state.WatchedList)
  console.log(watchedList)
  const dispatch = useDispatch()
  const handleRemove = (e) => {
      dispatch({type: 'remove',payload:e})
  }
  return (
    <div>
             <div className="movies-container">
          {watchedList.map((e) => {
            return (
              <div class='movie' key={e.id}>
                <span class='title'>{e.original_title}</span>
                <img  src={`https://image.tmdb.org/t/p/w300${e.poster_path}`} alt={e.title} />
                <br />
                <span>{e.overview.substring(0,200)} {e.overview.length>200 ? '...' : ''}</span>
                <br />
               
               
                <button class='remove' onClick={() => handleRemove(e)}>Remove</button>
                
              </div>
            );
          })}
        </div>
   </div>
  )
}

export default WatchedList