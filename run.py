#!flask/bin/python
from app import app
HOST='127.0.0.1'
app.run(host=HOST, port=3001, debug=True)
