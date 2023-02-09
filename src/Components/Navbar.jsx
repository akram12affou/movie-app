import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div>
      <header className='header'>
        <h1>MovieDB</h1>
        <div className='buttons'>
        <Link to='/Watched'><button>Watched List</button></Link>
        <Link to='/'><button>Search</button></Link>
        <Link to='/topmovies'><button>Top Movies</button></Link>
        </div> 
        <div class='humburger'>
        <i class="fa fa-bars"></i>
        </div>    
       </header>
    </div>
  )
}

export default Navbar