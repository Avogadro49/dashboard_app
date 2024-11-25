from flask import Flask
from .config import Config
from app.routes.teacher_routes import teacher_bp
from app.routes.college_routes import college_bp
from app.routes.profession_routes import profession_bp
from app.routes.module_routes import module_bp
from app.routes.student_routes import student_bp
from app.routes.teacher_college_routes import teacher_college_bp
from app.routes.college_profession_routes import college_profession_bp
from app.routes.module_profession_route import module_profession_bp
from app.routes.teacher_module_routes import teacher_module_bp
from app.routes.group_routes import group_bp
from app.utils.extensions import db, ma, migrate, cors
from flasgger import Swagger
import yaml

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    cors.init_app(app, resources={r"/": {'origins': "*"}}, supports_credentials=True)

    swagger = Swagger(app, template_file="../app/static/swagger.yml")
    

    BASE_API_URL='/api/v1'
    # => mount routes
    app.register_blueprint(teacher_bp, url_prefix=f'{BASE_API_URL}/teachers')
    app.register_blueprint(college_bp, url_prefix=f'{BASE_API_URL}/colleges')
    app.register_blueprint(profession_bp, url_prefix=f'{BASE_API_URL}/professions')
    app.register_blueprint(module_bp, url_prefix=f'{BASE_API_URL}/modules')
    app.register_blueprint(group_bp, url_prefix=f'{BASE_API_URL}/groups')
    app.register_blueprint(student_bp, url_prefix=f'{BASE_API_URL}/students')
    app.register_blueprint(teacher_college_bp, url_prefix=f'{BASE_API_URL}/teacher_college')
    app.register_blueprint(college_profession_bp, url_prefix=f'{BASE_API_URL}/college_profession')
    app.register_blueprint(module_profession_bp,url_prefix=f'{BASE_API_URL}/module_profession')
    app.register_blueprint(teacher_module_bp, url_prefix=f'{BASE_API_URL}/teacher_module')

    # print("Database URI:", app.config['SQLALCHEMY_DATABASE_URI'])
    # => Initialize extensions
    db.init_app(app)
    ma.init_app(app)

    # => Initialize Flask-migrate
    migrate.init_app(app, db)

    return app

