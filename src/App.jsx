
import './App.css'
import React,{useEffect, useState} from 'react'
import MovieCart from './Components/MovieCart';
import Navbar from './Components/Navbar';
import { Routes , Route} from 'react-router-dom'
import MovieListCom from './Components/MovieListCom';
import FavoriteListCom from './Components/FavoriteListCom';
import WatchedList from './Components/WatchedList';
function App() {
  

  
  
    
  
 
    


  
  return (
    <div>
      <Navbar/>
    <Routes>
     <Route element={<MovieListCom/>} path="/"></Route>
     <Route element={<FavoriteListCom/>} path="/favorite"></Route>
     <Route element={<WatchedList/>} path="/watched"></Route>
     </Routes>
    
    </div>
  )
}

export default App
