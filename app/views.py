from flask import Flask, render_template,  url_for, request
from app import app

import requests, json



@app.route('/')
def index():
    title="Happy Carrots"
    return render_template('index.html', title=title)
    

@app.route('/search')
def search():
    ingredients = request.args.get("ingredients")
    url = "https://api.edamam.com/search?q=vegan,%s&app_id=25111ad3&app_key=32b6013efa9b099aaebe182d8ca76f36" %ingredients
    response = requests.request("GET", url)
    image=response.json()['hits'][0]['recipe']['image']
    title = "Happy Carrots Search"
    return render_template('search.html', title=title, ingredients=ingredients, response=response.json(), image=image)
    
 
@app.route('/recipe')
def about():
    title = "Recipe"

    return render_template('recipe.html', title=title)
 
