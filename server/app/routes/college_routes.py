from flask import Blueprint
from app.controllers.college_controller import CollegeController

college_bp = Blueprint('college_bp', __name__)

college_bp.route('/colleges', methods=['POST'])(CollegeController.store)
college_bp.route('/colleges', methods=['GET'])(CollegeController.index)
college_bp.route('/colleges/<int:college_id>', methods=['GET'])(CollegeController.show)
college_bp.route('/colleges/<int:college_id>', methods=['PUT'])(CollegeController.update)
college_bp.route('/colleges/<int:college_id>', methods=['DELETE'])(CollegeController.delete)
