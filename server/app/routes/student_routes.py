from flask import Blueprint
from app.controllers.student_controller import StudentController

student_bp = Blueprint('student_bp', __name__)

student_bp.route('/', methods=['POST'])(StudentController.store)
student_bp.route('/', methods=['GET'])(StudentController.index)
student_bp.route('/<int:student_id>', methods=['GET'])(StudentController.show)
student_bp.route('/<int:student_id>', methods=['PUT'])(StudentController.update)
student_bp.route('/<int:student_id>', methods=['DELETE'])(StudentController.delete)
