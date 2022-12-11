
import './App.css'
import React,{useEffect, useState} from 'react'
import MovieCart from './Components/MovieCart';
import Navbar from './Components/Navbar';
import { Routes , Route} from 'react-router-dom'
import MovieListCom from './Components/MovieListCom';
function App() {
  

  
  
    
  
 
    


  
  return (
    <div>
      <Navbar/>
    <Routes>
     <Route element={<MovieListCom/>} path="/"></Route>
     </Routes>
    
    </div>
  )
}

export default App
