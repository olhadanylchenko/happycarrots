"use strict";


const ingredients = [];
const ul = document.getElementById("ingredientList");
const form = document.getElementById("addIngredient");


function addIngredient(e) {
    e.preventDefault();
    let ingredientName = document.getElementById("input").value;
    form.reset();
    if (ingredientName.trim() != "") {
        ingredients.push(ingredientName);
        appendIngredient(ingredientName);
    }
};

function appendIngredient(ingredientName) {
    let ingredient = document.createTextNode(ingredientName);
    let li = document.createElement("li");
    let tinyCarrot = document.createElement("img");
    tinyCarrot.src = carrot;
    tinyCarrot.className = "tiny-carrot";
    li.appendChild(tinyCarrot);
    li.appendChild(ingredient);
    ul.appendChild(li);

    var deleteButton = document.createElement("button");
    var x = document.createTextNode("\u00D7");
    deleteButton.className = "removeButton";
    deleteButton.type = "button";
    deleteButton.appendChild(x);
    li.appendChild(deleteButton);

    deleteButton.onclick = function () {
        let index = ingredients.indexOf(ingredientName);
        if (index > -1) {
            ingredients.splice(index, 1);
            li.remove();
        }
    }

};




form.addEventListener('submit', addIngredient);

document.getElementById("search").addEventListener("click", () => {
    window.location.href = `${window.location.href}${getSearchPath()}`;
    // console.log(getSearchPath());
})

function getSearchPath() {
    let searchPath = "search?ingredients=";
    ingredients.forEach((ingredient, index) => {
        if (index != ingredients.length - 1) {
            searchPath += ingredient + ",";
        } else {
            searchPath += ingredient;
        }
    });
    return searchPath;
}







// getSearchPath = () => {
//     let searchPath = "/search?ingredients=";
//     this.props.ingredients.forEach((ingredient, index) => {
//         if (index != this.props.ingredients.length - 1) {
//             searchPath += ingredient.title + ",";
//         } else {
//             searchPath += ingredient.title;
//         }
//     });
//     return searchPath;
// };



console.log('boom bitch!')
