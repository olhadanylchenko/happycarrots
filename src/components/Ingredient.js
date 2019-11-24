import React from 'react'
import PropTypes from 'prop-types'
import tinyCarrot from "./tiny-carrot.svg"
// import AddTodo from "./AddTodo"



export class Ingredient extends React.Component {
    // getStyle = () => {
    //     return {
    //         background: 'black',
    //         padding: '10px',
    //         borderBottom: '5px #ccc dotted',
    //         textDecoration: this.props.ingredient.completed ? 'line-through' : 'none'
    //     }
    // }

    // if (this.props.todo.completed) {
    //     return {
    //         textDecoration: 'line-through'
    //     }
    // } else {
    //     return {
    //         textDecoration: 'none'
    //     }
    // }






    render() {

        const { id, title } = this.props.ingredient;

        const handleClick = () => {
            this.props.delIngredient(id);
        }

        return (
            // <div style={this.getStyle()}>
            <div className='ingredient' >
                <img className="tiny-carrot"
                    src={tinyCarrot}
                    alt="Tiny-carrot" />
                {title}
                <button type="button"
                    onClick={handleClick}
                    className="removeButton">
                    delete
                </button>
            </div>
        )
    }
}



// PropTypes
Ingredient.propTypes = {
    ingredient: PropTypes.object.isRequired
}


// const btnStyle = {
//     background: "red",
//     color: "white",
//     borderRadius: "50%",
//     cursor: "pointer",
//     padding: "3px 7px",
//     float: "right",
//     border: "none"
// }

export default Ingredient
