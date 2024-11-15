from flask import Blueprint
from app.controllers.teacher_college_controller import TeacherCollegeController

teacher_college_bp = Blueprint('teacher_college', __name__)

teacher_college_bp.route('/teacher_college',methods=['POST'])(TeacherCollegeController.store)
teacher_college_bp.route('/teacher_college',methods=['DELETE'])(TeacherCollegeController.delete)
