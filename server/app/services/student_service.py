from app.models.student import Student
from app.schemas.student_schema import StudentSchema
from app.utils.utils import db
from sqlalchemy.exc import SQLAlchemyError

class StudentService:
    @staticmethod
    def create_student(student_data):
        try:
            student = Student(
                name=student_data["name"],
                email=student_data["email"],
                phone=student_data["phone"],
                group_id=student_data["group_id"]
            )
            db.session.add(student)
            db.session.commit()
            return student
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error creating student: {str(e)}")
        
    @staticmethod
    def updated_student(student_id, student_data):
        student = Student.query.get(student_id)

        if student is None:
            raise ValueError("Student not found")
        
        try:
            student_schema = StudentSchema()
            updated_student = student_schema.load(student_data)

            for key, value in updated_student.items():
                setattr(student, key, value)

            db.session.commit()

            return updated_student
        except SQLAlchemyError as e:
            db.session.rollback()
            raise Exception(f"Database error: {str(e)}")
        except ValueError as e:
            raise e
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error updating student: {str(e)}")