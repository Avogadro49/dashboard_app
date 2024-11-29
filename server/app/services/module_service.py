from app.utils.extensions import db
from app.models.module import Module
from app.schemas.module_schema import ModuleSchema
from sqlalchemy.exc import SQLAlchemyError


class ModuleService:
    @staticmethod
    def create_module(module_data):
        try:
            module = Module(
                name = module_data["name"],
                requirements = module_data["requirements"],
                code = module_data["code"]
            )
            db.session.add(module)
            db.session.commit()
            return module
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error creating module: {str(e)}")
        

    @staticmethod
    def update_module(module_id, module_data):
        module = Module.query.get(module_id)

        if module is None:
            raise ValueError("Module not found")
        
        try:
            module_schema = ModuleSchema(partial=True)
            updated_module = module_schema.load(module_data)

            for key, value in updated_module.items():
                setattr(module, key, value)

            db.session.commit()

            return updated_module
        except SQLAlchemyError as e:
            db.session.rollback()
            raise Exception(f"Database error: {str(e)}")
        except ValueError as e:
            raise e
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error updating module: {str(e)}")
