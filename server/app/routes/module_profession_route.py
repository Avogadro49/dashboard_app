from flask import Blueprint
from app.controllers.module_profession import ModuleProfessionController

module_profession_bp = Blueprint('module_profession', __name__)

module_profession_bp.route('/module_profession',methods=['POST'], endpoint='store_module_profession')(lambda: ModuleProfessionController.store())
module_profession_bp.route('/module_profession',methods=['DELETE'], endpoint='delete_module_profession')(lambda: ModuleProfessionController.delete())
