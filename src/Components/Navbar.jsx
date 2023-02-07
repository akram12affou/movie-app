import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to='/Watched'><button>Watched List</button></Link>
        <Link to='/'><button>Search</button></Link>
        
    </div>
  )
}

export default Navbar