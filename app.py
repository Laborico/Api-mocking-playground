from flask import Flask

app = Flask(__name__)

from api import *
from routes import *

if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)