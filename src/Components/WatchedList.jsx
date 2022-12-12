import React,{useState} from 'react'
import useMovie from '../Context/MovieContext'
function WatchedList() {
    const {favoriteList,WatchedList ,deleteFromWatched,addToFavorite} = useMovie()
    const [disabled,setDisabled]= useState(false)
    const deleteFwatched = (index) => {
        deleteFromWatched(index)
    }
    
    const addTfavorite = (title) => {
        // console.log(favoriteList.includes(title : title))
     
        addToFavorite(title)
        console.log({title : title},favoriteList)
    }
  return (
    <div>
         {WatchedList.length == 0 && <p> no Watched movie added yet</p>}
        {WatchedList.map((e,index) => {
            return (
                <div key={index}>
                <p> {e.title}</p>
                <button onClick={() => deleteFwatched(index)}>delete</button>
                <button onClick={() => addTfavorite(e.title)} disabled={e.disabled}>add to favorite</button>
                <hr />
                </div>
            )
        })}
        
    </div>
  )
}

export default WatchedList