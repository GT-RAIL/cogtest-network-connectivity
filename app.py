# app.py: simple server you can run for logging for this cognitive test

from flask import Flask, render_template, request
import json
import datetime


app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['PROPAGATE_EXCEPTIONS'] = True


# basic route for test
@app.route("/", methods=["GET"])
def index():
    showAnswers = str(request.args.get("showAnswers"))
    if showAnswers != "true":
        showAnswers = ""
    return render_template("index.html", showAnswers=showAnswers)


# Klishin test route
@app.route("/", methods=["GET"])
def index():
    showAnswers = str(request.args.get("showAnswers"))
    if showAnswers != "true":
        showAnswers = ""
    return render_template("klishin.html", showAnswers=showAnswers)


# logging route
@app.route("/logging", methods=["POST"])
def log():
    data = json.loads(request.data.decode())
    log_string = "\n" + str(datetime.datetime.now().timestamp()) + "," + data["worker-id"] + "," + str(data)
    with open("./logs/" + data["worker-id"] + ".txt", 'a+') as f:
        f.write(log_string)
    print("[LOG]", log_string[1:])

    return ""