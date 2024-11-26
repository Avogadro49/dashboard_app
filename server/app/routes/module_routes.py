from flask import Blueprint
from app.controllers.module_controller import ModuleController

module_bp = Blueprint('module', __name__)

# Define the routes and link them to controller methods
module_bp.route('/', methods=['POST'])(ModuleController.store)
module_bp.route('/', methods=['GET'])(ModuleController.index)
module_bp.route('/<int:module_id>', methods=['GET'])(ModuleController.show)
module_bp.route('/<int:module_id>', methods=['PUT'])(ModuleController.update)
module_bp.route('/<int:module_id>', methods=['DELETE'])(ModuleController.delete)

