from app.utils.utils import db
from app.models.teacher import Teacher
from app.schemas.teacher_schema import TeacherSchema
from sqlalchemy.exc import SQLAlchemyError


class TeacherService:
    @staticmethod
    def create_teacher(teacher_data):
        try:
            teacher = Teacher(
                name=teacher_data["name"],
                email=teacher_data["email"],
                phone=teacher_data["phone"],
                avatar=teacher_data.get("avatar")
            )
            db.session.add(teacher)
            db.session.commit()
            return teacher
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error creating teacher: {str(e)}")
    
    def update_teacher(teacher_id, teacher_data):
        teacher = Teacher.query.get(teacher_id)
        
        if teacher is None:
            raise ValueError("Teacher not found")
        
        try:
            teacher_schema = TeacherSchema()
            updated_teacher = teacher_schema.load(teacher_data)
            
            for key, value in updated_teacher.items():
                setattr(teacher, key, value)
            
            db.session.commit()

            return updated_teacher
        except SQLAlchemyError as e:
            db.session.rollback()
            raise Exception(f"Database error: {str(e)}")
        except ValueError as e:
            raise e
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error updating teacher: {str(e)}")
