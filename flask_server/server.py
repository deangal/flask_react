from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")

def home():
    return "Hello World"


# Members API Route

@app.route("/members")
def members():
    response = {
                "members":
                [
                        {"id":"1","name":"Nina"},
                        {"id":"2","name":"Gina"},
                        {"id":"3","name":"Seara"}
                    ]
                }

    return response 

    
if __name__ == "__main__":
    app.run(debug=True)

