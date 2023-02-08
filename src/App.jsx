import './App.css'
import React,{useEffect, useState} from 'react'
import MovieSearch from './Components/MovieSearch'
import Navbar from './Components/Navbar';
import { Routes , Route} from 'react-router-dom'
import WatchedList from './Components/WatchedList';
import MovieDetails from './Components/MovieDetails';
import TopMovies from './Components/TopMovies';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
       <Route path='/'element={<MovieSearch/>}></Route>
       <Route path='/Watched'element={<WatchedList/>}></Route>
       <Route path='/movie/:id' element={<MovieDetails/>}></Route>
       <Route path='/topmovies' element={<TopMovies/>}></Route>
       {/* <Route path="*" element={<NotFound />} /> */}
     </Routes>
    
    </div>
  )
}

export default App
