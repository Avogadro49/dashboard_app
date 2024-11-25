from flask import request, jsonify, abort
from app.models.college import College
from app.schemas.college_schema import CollegeSchema
from app.services.college_service import CollegeService
from app.utils.utils import db
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
        # except IntegrityError:
        #     db.session.rollback()
        #     return jsonify({"error": "A college with this email already exists!"}), 400
        except IntegrityError as e:
            return ErrorHandler.integrity_error(e)
        # except Exception as e:
        #     db.session.rollback()
        #     return jsonify({'error': str(e)}), 400
        except Exception as e:
            return ErrorHandler.generic_error(e)
    # displaying all colleges    
    @staticmethod
    def index():
        try:
            colleges = College.query.all()
            colleges_schema = CollegeSchema(many=True)
            return jsonify({ "data": colleges_schema.dump(colleges), "total": len(colleges)})

        except SQLAlchemyError as e:
            return jsonify({"error": "Database Error occurred", "details": str(e)})
        
    # displaying college by id    
    @staticmethod
    def show(college_id):
        college = College.query.get(college_id)
        if college is None:
            abort(404)
        college_schema = CollegeSchema()
        return college_schema.dump(college)
    
    @staticmethod
    def update(college_id):
        try:
            college_data = request.json
            updated_college = CollegeService.update_college(college_id, college_data)
            college_schema = CollegeSchema()
            return college_schema.dump(updated_college), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def delete(college_id):
        college = College.query.get(college_id)
        if college:
            try:
                db.session.delete(college)
                db.session.commit()
                return jsonify({"message": "College deleted successfully!"})
            except Exception as e:
                db.session.rollback()
                return jsonify({"error": str(e)}), 500
        return jsonify({"error": "College not found"}), 404
