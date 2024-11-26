import os
from flask import Blueprint
from app.controllers.app_controller import AppController


app_bl = Blueprint('app_bp', __name__)

app_bl.route('/', methods=["POST", "GET"])(AppController.redirect)
app_bl.route(f'{os.getenv("BASE_API_URL")}/details', methods=["GET"])(AppController.details)