from flask import Blueprint
from app.controllers.teacher_module_controller import TeacherModuleController
from app.models.teacher import Teacher
from app.models.college import College

teacher_module_bp = Blueprint('teacher_module', __name__)

teacher_module_bp.route('/',methods=['POST'], endpoint='store_teacher_module')(lambda: TeacherModuleController.store())
teacher_module_bp.route('/',methods=['DELETE'], endpoint='delete_teacher_module')(lambda: TeacherModuleController.delete())
