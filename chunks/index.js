const ingredients = [];
const ul = document.getElementById("list");
const form = document.getElementById("form");


function addIngredient(e) {
    e.preventDefault();
    let value = document.getElementById("input").value;
    form.reset();
    if (value.trim() != "") {
        ingredients.push(value);
        let ingredient = document.createTextNode(value);
        var li = document.createElement("li");
        li.appendChild(ingredient);
        ul.appendChild(li);
    };
}

form.addEventListener('submit', addIngredient);

document.getElementById("loggingBtn").addEventListener("click", () => {
    console.log(getSearchPath());
})

function getSearchPath() {
    let searchPath = "?ingredients=";
    console.log(searchPath);
    ingredients.forEach((ingredient, index) => {
        if (index != ingredients.length - 1) {
            searchPath += ingredient + ",";
        } else {
            searchPath += ingredient;
        }
    });
    return searchPath;
}
