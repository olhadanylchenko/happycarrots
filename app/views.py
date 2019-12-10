from flask import Flask, render_template,  url_for, request
from app import app
import urllib.parse
import requests, json



@app.route('/')
def index():
    title="Happy Carrots"
    return render_template('index.html', title=title)


@app.route('/search')
def search():
    ingredients = request.args.get("ingredients")
    url = "https://api.edamam.com/search?q=vegan,%s&app_id=25111ad3&app_key=32b6013efa9b099aaebe182d8ca76f36" % ingredients
    response = requests.request("GET", url)
    title = "Happy Carrots Search"
    get_uri = urllib.parse.quote
    return render_template('search.html', title=title, ingredients=ingredients, response=response.json(), get_uri=get_uri)


@app.route('/recipe')
def about():
    recipe = request.args.get("recipe")
    url = "https://api.edamam.com/search?r=%s&app_id=25111ad3&app_key=32b6013efa9b099aaebe182d8ca76f36" % urllib.parse.quote(recipe)
    response = requests.get(url).json()
    title = "Recipe"
    bodyclass = "recipe"
    return render_template('recipe.html', title=title, response=response, bodyclass=bodyclass)
 
