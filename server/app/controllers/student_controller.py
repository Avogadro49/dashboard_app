from flask import jsonify, request, abort
from app.models.student import Student
from app.schemas.student_schema import StudentSchema
from app.services.student_service import StudentService
from app.utils.extensions import db
from app.utils.error_handler import ErrorHandler
from sqlalchemy.exc import SQLAlchemyError, IntegrityError



class StudentController:
    @staticmethod
    def store():
        try:
            student_schema = StudentSchema()
            new_student_data = student_schema.load(request.json)
            new_student = StudentService.create_student(new_student_data)
            return student_schema.dump(new_student), 201
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
            students = Student.query.all()
            students_schema = StudentSchema(many=True)
            return jsonify({ "data": students_schema.dump(students), "total": len(students)})
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error()
        
    @staticmethod
    def show(student_id):
        try:
            student = Student.query.get(student_id)
            if student is None:
                abort(404)
            student_schema = StudentSchema()
            return student_schema.dump(student)
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            return ErrorHandler.generic_error(e)

    @staticmethod
    def update(student_id):
        try:
            teacher_data = request.json
            updated_student = StudentService.updated_student(student_id, teacher_data)
            student_schema = StudentSchema()
            return student_schema.dump(updated_student), 200
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
    def delete(student_id):
        try:
            student = Student.query.get(student_id)
            if student is None:
                return ErrorHandler.not_found_error()

            db.session.delete(student)
            db.session.commit()
            return jsonify({"message": "student deleted successfully."}), 204
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)
        
    
