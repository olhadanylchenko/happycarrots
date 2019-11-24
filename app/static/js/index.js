"use strict";



(function () {
    const input = document.getElementById("input");
    const buttonSearch = document.getElementById("search");
    const addIngredientForm = document.getElementById("addIngredient");

    addIngredientForm.addEventListener("submit", () => { })
})();



let ingredientsList = document.getElementsByTagName("li");

for (var i = 0; i < ingredientsList.length; i++) {
    var span = document.createElement("span");
    var deleteButton = document.createTextNode("delete");
    span.className = "removeButton";
    span.appendChild(deleteButton);
    ingredientsList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let remove = document.getElementsByClassName("removeButton");
for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

document.getElementById("addIngredient").addEventListener('submit', function (e) {
    e.preventDefault();
    newIngredient();
});

function newIngredient() {
    let li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var ingredient = document.createTextNode(inputValue);
    li.appendChild(ingredient);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("ingredientList").appendChild(li);
    }
    // document.getElementById("input").value = "";

    for (var i = 0; i < ingredientsList.length; i++) {
        var span = document.createElement("span");
        var deleteButton = document.createTextNode("delete");
        span.className = "removeButton";
        span.appendChild(deleteButton);
        ingredientsList[i].appendChild(span);
    }

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
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
