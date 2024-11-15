from flask import Blueprint
from app.controllers.teacher_college_controller import TeacherCollegeController
from app.controllers.association_controller import AssociationController
from app.models.teacher import Teacher
from app.models.college import College

teacher_college_bp = Blueprint('teacher_college', __name__)

teacher_college_bp.route('/teacher_college',methods=['POST'], endpoint='store_teacher_college')(lambda: TeacherCollegeController.store())
teacher_college_bp.route('/teacher_college',methods=['DELETE'], endpoint='delete_teacher_college')(lambda: TeacherCollegeController.delete())
