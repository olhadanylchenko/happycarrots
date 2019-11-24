import React from "react"

import Header from "./Header"
import Ingredients from './Ingredients';
import AddIngredient from './IngredientAdd'

export class Home extends React.Component {

    render() {
        return (
            <>
                <Header />
                <AddIngredient
                    ingredients={this.props.ingredients}
                    onSubmit={this.props.onSubmit}
                    onChange={this.props.onChange}
                    input={this.props.input}
                />
                <Ingredients
                    ingredients={this.props.ingredients}
                    markComplete={this.props.markComplete}
                    delIngredient={this.props.delIngredient}
                />
            </>
        )
    }
}


