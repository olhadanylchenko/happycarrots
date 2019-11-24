import React from 'react';
import Ingredient from './Ingredient'
import PropTypes from 'prop-types'
// import AddTodo from "./AddTodo"



class Ingredients extends React.Component {



    render() {
        return (
            this.props.ingredients.map((ingredient) => (
                <Ingredient key={ingredient.id}
                    ingredient={ingredient}
                    markComplete={this.props.markComplete}
                    delIngredient={this.props.delIngredient} />

            ))
        );
    }
}


// PropTypes
Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired
}

export default Ingredients;
