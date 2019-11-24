import React from 'react'
import logo from "./Logo.svg"
import carrot from "./Carrots.svg"

function Header() {
    return (
        <header>

            <img className="logo" src={logo} alt="Orange Logo" width="20" height="30" />
            <span className="span1">
                <h1>Add the ingredients</h1>
                <img className="carrot" src={carrot} alt="Carrot" />
            </span>
        </header>
    )
}


export default Header
