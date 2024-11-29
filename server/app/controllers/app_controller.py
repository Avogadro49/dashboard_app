import os
from flask import redirect, jsonify
from app.utils.extensions import db
from app.models.teacher import Teacher
from app.models.college import College
from app.models.group import Group
from app.models.module import Module
from app.models.profession import Profession
from app.models.student import Student
 

class AppController:
    @staticmethod
    def redirect():
        return redirect(os.getenv('CLIENT_URL'))
    
    @staticmethod
    def details():
        models = [
            {
                "id": 1,
                "name": "Teacher",
                "total": db.session.query(Teacher).count()
            },
            {
                "id": 2,
                "name": "College",
                "total": db.session.query(College).count()
            },
            {
                "id": 3,
                "name": "Group",
                "total": db.session.query(Group).count()
            },
            {
                "id": 4,
                "name": "Module",
                "total": db.session.query(Module).count()
            },
            {
                "id": 5,
                "name": "Profession",
                "total": db.session.query(Profession).count()
            },
            {
                "id": 6,
                "name": "Student",
                "total": db.session.query(Student).count()
            },
        ]
        return jsonify(models)
       
