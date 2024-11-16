from flask import Blueprint
from app.controllers.module_controller import ModuleController

module_bp = Blueprint('module', __name__)

# Define the routes and link them to controller methods
module_bp.add_url_rule('/modules', view_func=ModuleController.store, methods=['POST'])
module_bp.add_url_rule('/modules', view_func=ModuleController.index, methods=['GET'])
module_bp.add_url_rule('/modules/<int:teacher_id>', view_func=ModuleController.show, methods=['GET'])
module_bp.add_url_rule('/modules/<int:teacher_id>', view_func=ModuleController.update, methods=['PUT'])
module_bp.add_url_rule('/modules/<int:teacher_id>', view_func=ModuleController.delete, methods=['DELETE'])

