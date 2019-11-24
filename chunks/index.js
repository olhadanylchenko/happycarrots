let ingredients = [];

function addIngredient(e) {
    e.preventDefault();
    let value = document.getElementById("input").value;
    document.getElementById("form").reset();
    if (value.trim() != "") {
        ingredients.push(value);
        let ul = document.getElementById("list");
        let ingredient = document.createTextNode(value);
        var li = document.createElement("li");
        li.appendChild(ingredient);
        ul.appendChild(li);
    };
}

document.getElementById('form').addEventListener('submit', addIngredient);

document.getElementById("loggingBtn").addEventListener("click", () => {
    console.log(ingredients);


})
