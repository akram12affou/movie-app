
import './App.css'
import React,{useEffect, useState} from 'react'
import MovieCart from './Components/MovieCart';
import Navbar from './Components/Navbar';
import { Routes , Route} from 'react-router-dom'
import MovieListCom from './Components/MovieListCom';
import FavoriteListCom from './Components/FavoriteListCom';
import WatchedListCom from './Components/WatchedListCom';
import useMovie from './Context/MovieContext';
import MovieDetails from './Components/MovieDetails';
function App() {
  const {favoriteList,WatchedList} = useMovie()
useEffect(() => {
      window.localStorage.setItem('favorite',JSON.stringify(favoriteList))
  },[favoriteList])
  useEffect(() => {
    window.localStorage.setItem('watched',JSON.stringify(WatchedList))
},[WatchedList])
  return (
    <div>
      <Navbar/>
    <Routes>
     <Route element={<MovieDetails/>} path="/movie/:id"></Route>
     <Route element={<MovieListCom/>} path="/"></Route>
     <Route element={<FavoriteListCom/>} path="/favorite"></Route>
     <Route element={<WatchedListCom/>} path="/watched"></Route>
     </Routes>
    
    </div>
  )
}

export default App
