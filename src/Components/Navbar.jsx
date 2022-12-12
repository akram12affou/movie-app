import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to=''><button>Home</button></Link>
      <Link to='watched'><button>watched List</button></Link>
      <Link to='favorite'><button>You Favorite Movies</button></Link>
        
        
    </div>
  )
}

export default Navbar