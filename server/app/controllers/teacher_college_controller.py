from flask import request, jsonify
from app.utils import db
from app.models.teacher import Teacher
from app.models.college import College
from app.controllers.association_controller import AssociationController

class TeacherCollegeController:
    @staticmethod
    def store():
        return AssociationController.store(Teacher, College, 'colleges')
    # def store():
    #     try:
    #         # Get data from the request body
    #         data = request.get_json()
    #         teacher_id = data.get('teacher_id')
    #         college_id = data.get('college_id')

    #         teacher = Teacher.query.get(teacher_id)
    #         college = College.query.get(college_id)

    #         # Check if both Teacher and College exist
    #         if not teacher or not college:
    #             return jsonify({'error': 'Teacher or College not found'}), 404

    #         # Add the College to the Teacher's list of colleges
    #         teacher.colleges.append(college)
    #         db.session.commit()

    #         return jsonify({'message': 'Teacher-College association created successfully'}), 201

    #     except Exception as e:
    #         db.session.rollback()
    #         return jsonify({'error': str(e)}), 400

    @staticmethod
    def delete():
        return AssociationController.delete(Teacher, College, 'colleges')
    # def delete():
    #     try:
    #         data = request.get_json()
    #         teacher_id = data.get('teacher_id')
    #         college_id = data.get('college_id')

    #         teacher = Teacher.query.get(teacher_id)
    #         college = College.query.get(college_id)

    #         if not teacher or not college:
    #             return jsonify({'error': 'Teacher or College not found'}), 404

    #         if college in teacher.colleges:
    #             teacher.colleges.remove(college)
    #             db.session.commit()
    #             return jsonify({'message': 'Teacher-College association deleted successfully'}), 200
    #         else:
    #             return jsonify({'error': 'Association not found'}), 404

    #     except Exception as e:
    #         db.session.rollback()
    #         return jsonify({'error': str(e)}), 400
