from flask import Flask
from flask_cors import CORS
import joblib

vec = joblib.load("../model/vec.pkl")
model = joblib.load("../model/model.pkl")

app = Flask(__name__)
CORS(app)

@app.route("/test")
def create():
    test = model.predict(vec.transform(['I lost my job after the pandemic'])).tolist()
    return {"test": 1}