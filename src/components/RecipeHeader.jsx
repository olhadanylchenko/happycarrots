import React from 'react'
import LogoHome from "./LogoHome-05.svg"



function RecipeHeader(props) {
    return (
        <div class="headerMini">
            <img className="logoMini"
                alt=""
                src={LogoHome} alt="Orange LogoMini"
                width="150"
                height="100" />
        </div>
    );
};

export default RecipeHeader