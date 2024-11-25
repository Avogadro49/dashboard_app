from flask import jsonify, request, abort
from app.models.module import Module
from app.schemas.module_schema import ModuleSchema
from app.services.module_service import ModuleService
from app.utils.extensions import db
from app.utils.error_handler import ErrorHandler
from sqlalchemy.exc import SQLAlchemyError, IntegrityError

class ModuleController:
    @staticmethod
    def store():
        try:
            module_schema = ModuleSchema()
            new_module_data = module_schema.load(request.json)
            new_module = ModuleService.create_module(new_module_data)
            return module_schema.dump(new_module), 201
        except IntegrityError as e:
            db.session.rollback()
            return ErrorHandler.integrity_error(e)
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)
        

    @staticmethod
    def index():
        try:
            modules = Module.query.all()
            module_schema = ModuleSchema(many=True)
            return jsonify({ "data": module_schema.dump(modules), "total": len(modules)})

        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error()
        

    @staticmethod
    def show(module_id):
        try:
            module = Module.query.get(module_id)
            if module is None:
                abort(404)
            module_schema = ModuleSchema()
            return module_schema.dump(module)
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            return ErrorHandler.generic_error(e)
    
    @staticmethod
    def update(module_id):
        try:
            module_data = request.json
            updated_module = ModuleService.update_teacher(module_id, module_data)
            module_schema = ModuleSchema()
            return module_schema.dump(updated_module), 200
        except IntegrityError as e:
            db.session.rollback()
            return ErrorHandler.integrity_error(e)
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)
        
    @staticmethod
    def delete(module_id):
        try:
            module = Module.query.get(module_id)
            if module is None:
                return ErrorHandler.not_found_error()
            db.session.delete(module)
            db.session.commit()
            return jsonify({"message": "Module deleted successfully."}), 204
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)