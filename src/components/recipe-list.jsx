import React, { Component } from 'react'
import recipes from '../data/100carrots-recipes-response.json'

const Recipe = (props) => {
    const ingredients = [
        ...props.recipe.missedIngredients,
        ...props.recipe.usedIngredients
    ];
    console.log(ingredients)
    return (

        <li className="listItem">
            <img className="recipePic"
                src={props.recipe.image}
                width="200" alt="" />
            <h3>{props.recipe.title}</h3>
            <hr className="line" />
            <ul>
                {ingredients.map((ingredient) =>
                    <li key={ingredient.id}>
                        {ingredient.name}
                    </li>
                )}
            </ul>
        </li>
    );
}

export class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes
        };
    }

    render() {
        return (
            <ul className="list recipeList">
                {this.state.recipes.map((recipe) =>
                    <Recipe key={recipe.id} recipe={recipe} />
                )}
            </ul>
        )
    }
}