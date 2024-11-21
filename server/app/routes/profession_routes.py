from flask import Blueprint
from app.controllers.profession_controller import ProfessionController

profession_bp = Blueprint('profession_bp', __name__)

profession_bp.route('/', methods=["POST"])(ProfessionController.store)
profession_bp.route('/', methods=["GET"])(ProfessionController.index)
profession_bp.route('/<int:profession_id>', methods=["GET"])(ProfessionController.show)
profession_bp.route('/<int:profession_id>', methods=["PUT"])(ProfessionController.update)
profession_bp.route('/<int:profession_id>', methods=["DELETE"])(ProfessionController.delete)




