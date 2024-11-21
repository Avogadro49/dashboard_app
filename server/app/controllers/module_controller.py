from flask import jsonify, request, abort
from app.models.module import Module
from app.schemas.module_schema import ModuleSchema
from app.services.module_service import ModuleService
from server.app.utils.utils import db
from sqlalchemy.exc import SQLAlchemyError

class ModuleController:
    @staticmethod
    def store():
        try:
            module_schema = ModuleSchema()
            new_module_data = module_schema.load(request.json)
            new_module = ModuleService.create_module(new_module_data)
            return module_schema.dump(new_module), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)}), 400
        

    @staticmethod
    def index():
        try:
            modules = Module.query.all()
            module_schema = ModuleSchema(many=True)
            return module_schema.dump(modules)
        except SQLAlchemyError as e:
            return jsonify({"error": "Database error occurred", "details": str(e)})

    @staticmethod
    def show(module_id):
        module = Module.query.get(module_id)
        if module is None:
            abort(404)
        module_schema = ModuleSchema()
        return module_schema.dump(module)
    
    @staticmethod
    def update(module_id):
        try:
            module_data = request.json
            updated_module = ModuleService.update_teacher(module_id, module_data)
            module_schema = ModuleSchema()
            return module_schema.dump(updated_module), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400
        
    @staticmethod
    def delete(module_id):
        module = Module.query.get(module_id)
        if module is None:
            abort(404)

        db.session.delete(module)
        db.session.commit()
        return jsonify({"message": "Module deleted successfully."}), 204