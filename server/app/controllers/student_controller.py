from flask import jsonify, request, abort
from app.models.student import Student
from app.schemas.student_schema import StudentSchema
from app.services.student_service import StudentService
from server.app.utils.utils import db
from sqlalchemy.exc import SQLAlchemyError



class StudentController:
    @staticmethod
    def store():
        try:
            student_schema = StudentSchema()
            new_student_data = student_schema.load(request.json)
            new_student = StudentService.create_student(new_student_data)
            return student_schema.dump(new_student), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def index():
        try:
            students = Student.query.all()
            students_schema = StudentSchema(many=True)
            return students_schema.dump(students)
        except SQLAlchemyError as e:
            return jsonify({"error": "Database error occurred", "details": str(e)})

    @staticmethod
    def show(student_id):
        student = Student.query.get(student_id)
        if student is None:
            abort(404)
        student_schema = StudentSchema()
        return student_schema.dump(student)

    @staticmethod
    def update(student_id):
        try:
            teacher_data = request.json
            updated_student = StudentService.updated_student(student_id, teacher_data)
            student_schema = StudentSchema()
            return student_schema.dump(updated_student), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400

    @staticmethod
    def delete(student_id):
        student = Student.query.get(student_id)
        if student is None:
            abort(404)

        db.session.delete(student)
        db.session.commit()
        return jsonify({"message": "student deleted successfully."}), 204
    
    
