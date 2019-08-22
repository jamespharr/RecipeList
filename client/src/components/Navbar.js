import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 return(
   <>
     <nav>
       <Link to="/">Home</Link>  <Link to="/recipes">Recipe List</Link>
     </nav>
     <h1 id="app-name">WynRecipes</h1>
   </>
 )
}

export default Navbar
