from flask import Blueprint
from app.controllers.teacher_controller import TeacherController

teacher_bp = Blueprint('teacher', __name__)

# Define the routes and link them to controller methods
teacher_bp.add_url_rule('/teachers', view_func=TeacherController.store, methods=['POST'])
teacher_bp.add_url_rule('/teachers', view_func=TeacherController.index, methods=['GET'])
teacher_bp.add_url_rule('/teachers/<int:teacher_id>', view_func=TeacherController.show, methods=['GET'])
teacher_bp.add_url_rule('/teachers/<int:teacher_id>', view_func=TeacherController.update, methods=['PUT'])
teacher_bp.add_url_rule('/teachers/<int:teacher_id>', view_func=TeacherController.delete, methods=['DELETE'])

