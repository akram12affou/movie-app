
import './App.css'
import React,{useEffect, useState} from 'react'
import MovieSearch from './Components/MovieSearch'
import Navbar from './Components/Navbar';
import { Routes , Route} from 'react-router-dom'
import WatchedList from './Components/WatchedList';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
       <Route path='/'element={<MovieSearch/>}></Route>
       <Route path='/Watched'element={<WatchedList/>}></Route>
     </Routes>
    
    </div>
  )
}

export default App
