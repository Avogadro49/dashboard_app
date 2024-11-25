from flask import request, jsonify, abort
from app.models.college import College
from app.schemas.college_schema import CollegeSchema
from app.services.college_service import CollegeService
from app.utils.extensions import db
from app.utils.error_handler import ErrorHandler
from sqlalchemy.exc import SQLAlchemyError, IntegrityError


class CollegeController:
    # creating college
    @staticmethod
    def store():
        try:
            college_schema = CollegeSchema()
            new_college_data = college_schema.load(request.json)
            new_college = CollegeService.create_college(new_college_data)
            return college_schema.dump(new_college), 201
        except IntegrityError as e:
            db.session.rollback()
            return ErrorHandler.integrity_error(e)
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)
    # displaying all colleges    
    @staticmethod
    def index():
        try:
            colleges = College.query.all()
            colleges_schema = CollegeSchema(many=True)
            return jsonify({ "data": colleges_schema.dump(colleges), "total": len(colleges)})

        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error()
        
    # displaying college by id    
    @staticmethod
    def show(college_id):
        try:
            college = College.query.get(college_id)
            if college is None:
                abort(404)
            college_schema = CollegeSchema()
            return college_schema.dump(college)
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            return ErrorHandler.generic_error(e)
    
    @staticmethod
    def update(college_id):
        try:
            college_data = request.json
            updated_college = CollegeService.update_college(college_id, college_data)
            college_schema = CollegeSchema()
            return college_schema.dump(updated_college), 200
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
    def delete(college_id):
        try:
            college = College.query.get(college_id)
            if college is None:
                return ErrorHandler.not_found_error()
            db.session.delete(college)
            db.session.commit()
            return jsonify({"message": "College deleted successfully!"})
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)
