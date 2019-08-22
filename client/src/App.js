import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import RecipeList from "./pages/recipes"
import RecipeDetails from "./pages/recipeDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipeList} />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
