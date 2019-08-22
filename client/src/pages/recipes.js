import React, { Component } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import "./recipeList.css"

class RecipeList extends Component {
  state = { recipes: [] }

  fetchRecipes = event => {

    if(event.target.value){
      fetch(`/recipes/search/${event.target.value}`)
        .then(response => response.json())
        .then(recipes => this.setState({ recipes }))
    }else{
      this.setState({recipes: []})
    }
  }

  render() {
    return (
      <>
      <div id="navbar-recipes">
        <Navbar/>
        <img alt="" src="watermelon.png" id="fruit-boys"/>
        </div>
        <div id="search-input">
          <h1> Search for your recipe by name or ingredient: </h1>
          <form>
            <input id="search-bar" type="text" onChange={this.fetchRecipes} />
          </form>
        </div>
        <div id="results">
          {this.state.recipes.map((recipe, i) => {
            const data = recipe.recipe
            const query = encodeURIComponent(data.uri)
            return (
              <Link to={`/recipes/${query}`} key={i}>
                <div className="recipe">
                <img className="recipe-img" alt={data.label} src={data.image}/>
                  <h3 className="recipe-name">{data.label}</h3>
                  <h3 className="servings"> Serves: {data.yield}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </>
    )
  }
}

export default RecipeList
