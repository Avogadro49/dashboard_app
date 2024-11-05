# controllers.py
from flask import jsonify, request, abort
from app.models.teacher import Teacher
from app.schemas.teacher_schema import TeacherSchema
from app.utils import db

class TeacherController:
    @staticmethod
    def store():
        try:
            teacher_schema = TeacherSchema()
            new_teacher = teacher_schema.load(request.json)
            db.session.add(new_teacher)
            db.session.commit()
            return teacher_schema.jsonify(new_teacher), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def index():
        teachers = Teacher.query.all()
        teachers_schema = TeacherSchema(many=True)
        return teachers_schema.dump(teachers)

    @staticmethod
    def show(teacher_id):
        teacher = Teacher.query.get(teacher_id)
        if teacher is None:
            abort(404)
        teacher_schema = TeacherSchema()
        return teacher_schema.jsonify(teacher)

    @staticmethod
    def update(teacher_id):
        teacher = Teacher.query.get(teacher_id)
        if teacher is None:
            abort(404)

        try:
            teacher_schema = TeacherSchema()
            updated_teacher = teacher_schema.load(request.json, instance=teacher)
            db.session.commit()
            return teacher_schema.jsonify(updated_teacher)
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
