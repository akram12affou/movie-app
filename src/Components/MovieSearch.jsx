import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
function MovieSearch() {
    const WatchedList = useSelector((state) => state.WatchedList )
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const [movieList,setMovieList] = useState([])
    const [query,setQuery] = useState('')
    const [adult,setAdult] = useState(false)
    const [page,setPage] = useState(1)
    const REACT_APP_TMDB_KEY = '4a16a312cc25534aac7bab9f0901fa3b'
    useEffect(() => {
      if(query == ''){
        setMovieList([])
        return;
      }
       setLoading(true)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=${page}&include_adult=${adult}&query=${query}`)
        .then((res) => setMovieList(res.data.results))
        .then((res) => setLoading(false))
        .catch(err => console.log(err))
        }, [query, page, adult]) 
       
    
      const handlebutton = (e) => {
      if(e == '+'){
        setPage(prev => {
         return prev+1
        })
      }
      if(e == '-'){
       setPage(prev => {
        return prev-1
       })
     }
      }
      const handleAdultContent = () => {
        setAdult(!adult)
      }
      const handledisable = (item) => {
        
        let state = false;
        for(let i=0;WatchedList.length> i;i++){
          if(WatchedList[i]== item) {
            state = true
          }
        }
       
         return state;
   
      }
      console.log(WatchedList)
  return (
    <div>
        <label>Search a Movie</label>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        +18 : <input type="checkbox" value={adult} onChange={() => handleAdultContent()}/>
        {loading ? <>Loading...</> : <>{movieList.map((e) => {
          return(
            <div key={e.id}>
              <span>{e.original_title}</span>
              <br />
              <span>{e.overview}</span>
              <br />
              <Link  to={`movie/${e.id}`}><button>Details</button></Link>
              <button onClick={() => dispatch({type:'first',payload:e})} disabled={ handledisable(e)}>Add to Watched List </button>
              <hr />
            </div>
          )
        })}</>}
       
       <button onClick={() => handlebutton('-')} disabled={page==1}>-</button> {page} <button onClick={() => handlebutton('+')} >+</button>
    </div>
  )
}

export default MovieSearch