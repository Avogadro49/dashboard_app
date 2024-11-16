from flask import request, jsonify
from app.utils import db
from app.models.teacher import Teacher
from app.models.college import College
from app.controllers.association_controller import AssociationController

class TeacherCollegeController:
    @staticmethod
    def store():
        return AssociationController.store(Teacher, College, 'colleges')

    @staticmethod
    def delete():
        return AssociationController.delete(Teacher, College, 'colleges')
