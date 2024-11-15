from app.utils import db
from app.models.college import College
from app.schemas.college_schema import CollegeSchema
from sqlalchemy.exc import SQLAlchemyError



class CollegeService:
    @staticmethod
    def create_college(college_data):
        try:
            college = College(
                name=college_data["name"],
                location=college_data['location'],
                email=college_data["email"],
                phone=college_data["phone"],
                logo=college_data.get("logo")
            )
            db.session.add(college)
            db.session.commit()
            return college
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error creating college: {str(e)}")
        
    @staticmethod
    def update_college(college_id, college_data):
        college = College.query.get(college_id)

        if college is None:
            raise ValueError("College not found")
        
        try:
            college_schema= CollegeSchema()
            updated_college = college_schema.load(college_data)

            for key, value in updated_college.items():
                setattr(college, key, value)

            db.session.commit()

            return updated_college
        except SQLAlchemyError as e:
            db.session.rollback()
            raise Exception(f"Database error: {str(e)}")
        except ValueError as e:
            raise e
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error updating college: {str(e)}")