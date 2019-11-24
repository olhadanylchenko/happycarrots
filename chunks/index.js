let ingredients = [];

function addIngredient(e) {
    e.preventDefault();
    let value = document.getElementById("input").value;
    document.getElementById("form").reset();
    if (value.trim() != "") {
        ingredients.push(value);
        console.log(ingredients)
    }
}

document.getElementById('form').addEventListener('submit', addIngredient);


