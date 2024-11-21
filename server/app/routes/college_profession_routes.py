from flask import Blueprint
from app.controllers.college_profession_controller import CollegeProfessionController

college_profession_bp = Blueprint('college_profession', __name__)

college_profession_bp.route('/',methods=['POST'], endpoint='store_college_profession')(lambda: CollegeProfessionController.store())
college_profession_bp.route('/',methods=['DELETE'], endpoint='delete_college_profession')(lambda: CollegeProfessionController.delete())
