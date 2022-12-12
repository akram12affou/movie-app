import React from 'react'
import useMovie from '../Context/MovieContext'
function FavoriteListCom() {
  const {favoriteList, deleteFromfavorite} = useMovie()
  const deleteFfav = ( index ) => {
     deleteFromfavorite(index)
  }
  return (
    <div> 
      {favoriteList.length == 0 && <p> no favorite movie added yet</p>}
    {favoriteList.map((e,i) => {
      return(
        <div key={i}>
        <p>{e.title}</p>
        <button onClick={() => deleteFfav(i)}>delete</button>
        <hr />
        </div>
      )
    })}
    </div>
  )
}

export default FavoriteListCom