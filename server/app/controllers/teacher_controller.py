from flask import jsonify, request, abort
from app.models.teacher import Teacher
from app.schemas.teacher_schema import TeacherSchema
from app.services.teacher_service import TeacherService
from app.utils.extensions import db
from app.utils.error_handler import ErrorHandler
from sqlalchemy.exc import SQLAlchemyError, IntegrityError



class TeacherController:
    @staticmethod
    def store():
        try:
            teacher_schema = TeacherSchema()
            new_teacher_data = teacher_schema.load(request.json)
            new_teacher = TeacherService.create_teacher(new_teacher_data)
            return teacher_schema.dump(new_teacher), 201
        except IntegrityError as e:
            db.session.rollback()
            return ErrorHandler.integrity_error(e)
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error(e)
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)

    @staticmethod
    def index():
        try:
            teachers = Teacher.query.all()
            teachers_schema = TeacherSchema(many=True)
            return jsonify({ "data": teachers_schema.dump(teachers), "total": len(teachers)})
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error(e)
        
    @staticmethod
    def show(teacher_id):
        try:
            teacher = Teacher.query.get(teacher_id)
            if teacher is None:
                abort(404)
            teacher_schema = TeacherSchema()
            return teacher_schema.dump(teacher)
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error(e)
        except Exception as e:
            return ErrorHandler.generic_error(e)

    @staticmethod
    def update(teacher_id):
        try:
            teacher_data = request.json
            updated_teacher = TeacherService.update_teacher(teacher_id, teacher_data)
            teacher_schema = TeacherSchema()
            return teacher_schema.dump(updated_teacher), 200
        except IntegrityError as e:
            db.session.rollback()
            return ErrorHandler.integrity_error(e)
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error(e)
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)

    @staticmethod
    def delete(teacher_id):
        try:
            teacher = Teacher.query.get(teacher_id)
            if teacher is None:
                return ErrorHandler.not_found_error()

            db.session.delete(teacher)
            db.session.commit()
            return jsonify({"message": "Teacher deleted successfully."}), 204
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)
    
    
