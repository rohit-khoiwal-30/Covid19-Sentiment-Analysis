from flask import Flask, request
from flask_cors import CORS
import joblib

vec = joblib.load("../model/vec.pkl")
model = joblib.load("../model/model.pkl")

app = Flask(__name__)
CORS(app)

@app.route("/test", methods = ['POST'])
def create():
    ans = model.predict(vec.transform([request.data.lower()])).tolist()
    probs = model.predict_proba(vec.transform([request.data.lower()])).tolist()
    return {"class": ans, "probs" : probs}