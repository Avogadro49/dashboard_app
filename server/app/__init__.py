from flask import Flask
from .config import Config
from app.routes.teacher_routes import teacher_bp
from app.routes.college_routes import college_bp
from app.routes.profession_routes import profession_bp
from app.routes.module_routes import module_bp
from app.routes.teacher_college_routes import teacher_college_bp
from app.routes.college_profession_routes import college_profession_bp
from app.routes.module_profession_route import module_profession_bp
from app.routes.teacher_module_routes import teacher_module_bp
from app.utils import db, ma, migrate

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    
    # => mount routes
    app.register_blueprint(teacher_bp)
    app.register_blueprint(college_bp)
    app.register_blueprint(profession_bp)
    app.register_blueprint(module_bp)
    app.register_blueprint(teacher_college_bp)
    app.register_blueprint(college_profession_bp)
    app.register_blueprint(module_profession_bp)
    app.register_blueprint(teacher_module_bp)

    # print("Database URI:", app.config['SQLALCHEMY_DATABASE_URI'])
    # => Initialize extensions
    db.init_app(app)
    ma.init_app(app)

    # => Initialize Flask-migrate
    migrate.init_app(app, db)

    return app

