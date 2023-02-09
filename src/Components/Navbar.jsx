import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  const [open,setOpen] = useState(false)
  const css = `.humburger-menu{
    display:none;
  }
}`
  return (
    <div>
      <header className='header'>
        <h1>MovieDB</h1>
        <div className='buttons'>
        <Link to='/Watched'><button>Watched List</button></Link>
        <Link to='/'><button>Search</button></Link>
        <Link to='/topmovies'><button>Top Movies</button></Link>
        </div> 
        <div class='humburger' onClick={() => setOpen(!open)}>
          <i class="fa fa-bars"></i>
        </div>    
        <div class='humburger-menu'>
        <Link to='/Watched'><button>Watched List</button></Link>
        <Link to='/'><button>Search</button></Link>
        <Link to='/topmovies'><button>Top Movies</button></Link>
        </div>
       </header>
       <style>
        {open && css}
       </style>
    </div>
  )
}

export default Navbar