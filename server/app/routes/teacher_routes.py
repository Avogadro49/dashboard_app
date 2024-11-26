from flask import Blueprint
from app.controllers.teacher_controller import TeacherController

teacher_bp = Blueprint('teacher', __name__)

# Define the routes and link them to controller methods
teacher_bp.route('/', methods=['POST'])(TeacherController.store)
teacher_bp.route('/', methods=['GET'])(TeacherController.index)
teacher_bp.route('/<int:teacher_id>', methods=['GET'])(TeacherController.show)
teacher_bp.route('/<int:teacher_id>', methods=['PUT'])(TeacherController.update)
teacher_bp.route('/<int:teacher_id>', methods=['DELETE'])(TeacherController.delete)
