from app.utils import db
from app.models.profession import Profession 
from app.schemas.profession_schema import ProfessionSchema
from sqlalchemy.exc import SQLAlchemyError



class ProfessionService:
    @staticmethod
    def create_profession(profession_data):
        try:
            profession = Profession(
                name=profession_data["name"],
                description=profession_data["description"],
                code=profession_data["code"],
            )
            db.session.add(profession)
            db.session.commit()
            return profession
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error creating profession: {str(e)}")
        
    
    @staticmethod
    def update_profession(profession_id, profession_data):
        profession = Profession.query.get(profession_id)
        if profession is None:
            raise ValueError("Profession not found")
        
        try:
            profession_schema = ProfessionSchema()
            updated_profession = profession_schema.load(profession_data)

            for key, value in updated_profession.items():
                setattr(profession, key, value)

            db.session.commit()

            return updated_profession
        except SQLAlchemyError as e:
            db.session.rollback()
            raise Exception(f"Database error: {str(e)}")
        except ValueError as e:
            raise e
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error updating profession: {str(e)}")
        
