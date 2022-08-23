from crypt import methods
from app import app

@app.route('/api/v1/endpoint', methods=['POST'])
def endpoint():
    return "Sucessfull Call!", 200