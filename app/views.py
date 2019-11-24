from flask import Flask, render_template,  url_for
from app import app


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search')
def frauenloop():
    title = "Search"
    subtitle = "You are on another page"
    return render_template('search.html', title=title, subtitle=subtitle)
 
@app.route('/recipe')
def about():
    title = "Recipe"
    subtitle = "You are on about page"
    
    return render_template('recipe.html', title=title, subtitle=subtitle)
 
