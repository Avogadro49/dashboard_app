from flask import Flask
from .config import Config
from app.routes.teacher_routes import teacher_bp
from app.utils import db, migrate, ma

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    
    app.register_blueprint(teacher_bp)

    # print("Database URI:", app.config['SQLALCHEMY_DATABASE_URI'])
    # Initialize extensions
    db.init_app(app)
    ma.init_app(app)

    # Initialize Flask-migrate
    migrate.init_app(app, db)

    return app

