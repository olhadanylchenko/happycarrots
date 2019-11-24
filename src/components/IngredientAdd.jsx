import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class AddIngredient extends Component {

    getSearchPath = () => {
        let searchPath = "/search?ingredients=";
        this.props.ingredients.forEach((ingredient, index) => {
            if (index != this.props.ingredients.length - 1) {
                searchPath += ingredient.title + ",";
            } else {
                searchPath += ingredient.title;
            }
        });
        return searchPath;
    }

    render() {
        return (
            <div className='adding'>
                <h2>Tell us what you have in your fridge, and we’ll see <br />what recipes we can find for you.</h2>
                <form onSubmit={this.props.onSubmit} className="span2">
                    <input type="text" placeholder="example: red lentils" value={this.props.input} onChange={this.props.onChange} />
                    <button type="submit" className="add">Add!</button>
                </form>
                <Link to={this.getSearchPath()} className="search" hidden={this.props.ingredients.length == 0}>Search for recipes</Link>
            </div>
        );
    }

}
/* <div>
        <form onSubmit={this.props.onSubmit} style={{ display: "flex" }}>
            <input type="text" value={this.props.input} style={inputStyle} placeholder="Add a todo..." onChange={this.props.onChange} />
            <button
                style={addStyle}
                type="submit"
                value="Submit"
            >Add</button>
        </form>
    </div > */



export default AddIngredient

