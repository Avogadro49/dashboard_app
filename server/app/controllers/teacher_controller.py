from flask import jsonify, request, abort
from app.models.teacher import Teacher
from app.schemas.teacher_schema import TeacherSchema
from app.services.teacher_service import TeacherService
from app.utils import db
from sqlalchemy.exc import SQLAlchemyError



class TeacherController:
    @staticmethod
    def store():
        try:
            teacher_schema = TeacherSchema()
            new_teacher_data = teacher_schema.load(request.json)
            new_teacher = TeacherService.create_teacher(new_teacher_data)
            return teacher_schema.dump(new_teacher), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def index():
        try:
            teachers = Teacher.query.all()
            teachers_schema = TeacherSchema(many=True)
            return teachers_schema.dump(teachers)
        except SQLAlchemyError as e:
            return jsonify({"error": "Database error occurred", "details": str(e)})

    @staticmethod
    def show(teacher_id):
        teacher = Teacher.query.get(teacher_id)
        if teacher is None:
            abort(404)
        teacher_schema = TeacherSchema()
        return teacher_schema.dump(teacher)

    @staticmethod
    def update(teacher_id):
        try:
            teacher_data = request.json
            updated_teacher = TeacherService.update_teacher(teacher_id, teacher_data)
            teacher_schema = TeacherSchema()
            return teacher_schema.dump(updated_teacher), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def delete(teacher_id):
        teacher = Teacher.query.get(teacher_id)
        if teacher is None:
            abort(404)

        db.session.delete(teacher)
        db.session.commit()
        return jsonify({"message": "Teacher deleted successfully."}), 204
    
    
