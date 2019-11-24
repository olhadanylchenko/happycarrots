import React from 'react';
import './HappyCarrotsStyle.css';
import { RecipeList } from './recipe-list';
import RecipeHeader from './RecipeHeader'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home"

class HappyCarrots extends React.Component {
  state = {
    ingredients: [],
    input: "",
    submit: ""
  }


  // Toggle Complete
  // markComplete = (id) => {
  //   this.setState({

  //     ingredients: this.state.ingredients.map(ingredient => {
  //       if (ingredient.id === id) {
  //         ingredient.completed = !ingredient.completed
  //       }
  //       return ingredient
  //     })
  //   })
  // }
  // 

  onChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  // Handle "Add Todo" click
  // checking if the input is not empty(or a bunch of spaces),
  // checking if the id isn't taken,
  // adding an input to the end of the list
  onSubmit = (event) => {
    event.preventDefault()
    const ingredients = this.state.ingredients;
    if (this.state.input.trim() !== "") {



      // ADDING A NEW TODO with the unique id
      ingredients.push({
        id: ingredients.length === 0 ? 0 : ingredients[ingredients.length - 1].id + 1,
        title: this.state.input,
      })
    }

    this.setState({
      input: "",
      ingredients: ingredients
    })
  }

  // Delete todo
  delIngredient = (id) => {
    console.log(id);
    const ingredients = this.state.ingredients.filter(ingredient => ingredient.id !== id);
    this.setState({
      ingredients: ingredients
    })
  }

  render() {
    return (

      <Router>
        <Switch>
          <Route path="/" exact>
            <Home
              ingredients={this.state.ingredients}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              input={this.state.input}
              markComplete={this.markComplete}
              delIngredient={this.delIngredient}
            />
          </Route>

          <Route exact path="/search">
            <RecipeHeader />
            <RecipeList />
          </Route>
        </Switch>
      </Router>

    );
  }
}



export default HappyCarrots;
