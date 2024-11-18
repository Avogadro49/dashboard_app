from flask import Blueprint
from app.controllers.group_controller import GroupController

group_bp = Blueprint('group_bp', __name__)

group_bp.route('/', methods=['POST'])(GroupController.store)
group_bp.route('/', methods=['GET'])(GroupController.index)
group_bp.route('/<int:group_id>', methods=['GET'])(GroupController.show)
group_bp.route('/<int:group_id>', methods=['PUT'])(GroupController.update)
group_bp.route('/<int:group_id>', methods=['DELETE'])(GroupController.delete)
