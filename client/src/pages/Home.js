import React from 'react'
import Navbar from '../components/Navbar'
import './home.css'

const Home = () => {
  return(
    <>
    <div id="navbar-home">
      <Navbar/>
      <img alt="" src='hamburger.png' id="burger"/>
    </div>
      <header>
        <h2 id="head-first">For Quick & Easy Recipes, with none of the filler.</h2>
      </header>
        <div id="tomato">
          <h2 id="fluff-text" className="tomato-text">
            Straight to the point & easy to read.
          </h2>
          <div className="tomato-text" id="center-text">Find recipes by name or ingredients</div>

        </div>
        <div id="meat">
        <img alt="" id="cookbook" src='cookbook.png'/>
      
        </div>
      <footer>
        <div id="bottom-bun"></div>
      </footer>
    </>
  )
}

export default Home
