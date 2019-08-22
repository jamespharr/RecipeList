import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import "./recipeDetails.css"


class RecipeDetails extends Component {
  state = {
    recipe: {}
 }

  componentDidMount(){
    const id = this.props.match.params.id
    fetch(`/recipes/${id}`)
      .then(response => response.json())
      .then(recipe => this.setState({ recipe }))
      .catch(err => this.setState({recipe:[]}))
  }

  render(){
  const { label, image, source, url, dietLabels, healthLabels, ingredientLines } = this.state.recipe
  return(
    <>
    <div id="navbar-details">
      <Navbar/>
      <img alt="" src="carrot.png" id="carrot"/>
    </div>
    <div id="recipe-info">
      <div id="title">
        <h1>{label}</h1>
        <h2> Credits to: {source}</h2>
        <img id="recipe-pic" alt="" src={image}/>
        <h3 id="recipe-url"><a href={url} target="blank">{url}</a></h3>
      </div>
      <div id="health">
        <div id="diet">
          <h3>Type of Diet:</h3>
          <ul className="lists">
            {(dietLabels || []).map(dlabel => <li className='list-li' key={dlabel}>{dlabel}</li>)}
          </ul>
        </div>
        <div id="allergies">
          <h3>Is it good for your health?</h3>
          <ul className="lists">
            {(healthLabels || []).map(hlabel => <li className='list-li' key={hlabel}>{hlabel}</li>)}
          </ul>
        </div>
      </div>
      <div id="ingredients">
        <h3> Ingredients: </h3>
        <ul className="lists">
          {(ingredientLines || []).map(ingredient => <li className='list-li' key={ingredient}>{ingredient}</li>)}
        </ul>
        </div>
      </div>
    </>
  )
  }
}

export default RecipeDetails
