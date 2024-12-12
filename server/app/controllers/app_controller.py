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
                "links": [
                        {
                            "text": "Create",
                            "path": "teachers/create",
                        },
                        {
                            "text": "View",
                            "path": "teachers/index",
                        },
                    ],
                "monthlyData": [
                    { "month": "Jan", "count": 4 },
                    { "month": "Feb", "count": 5 },
                    { "month": "Mar", "count": 6 },
                    { "month": "Apr", "count": 12 },
                    { "month": "May", "count": 25 },
                    { "month": "Jun", "count": 45 },
                    { "month": "Jul", "count": 54 },
                    { "month": "Aug", "count": 40 },
                    { "month": "Sep", "count": 41 },
                    { "month": "Oct", "count": 45 },
                    { "month": "Nov", "count": 43 },
                    { "month": "Dec", "count": 33 },
                ],
                "total": db.session.query(Teacher).count()
            },
            {
                "id": 2,
                "name": "College",
                "links": [
                        {
                            "text": "Create",
                            "path": "colleges/create",
                        },
                        {
                            "text": "View",
                            "path": "colleges/index",
                        },
                    ],
                "total": db.session.query(College).count()
            },
            {
                "id": 3,
                "name": "Group",
                "links": [
                        {
                            "text": "Create",
                            "path": "groups/create",
                        },
                        {
                            "text": "View",
                            "path": "groups/index",
                        },
                    ],
                "total": db.session.query(Group).count()
            },
            {
                "id": 4,
                "name": "Module",
                "links": [
                        {
                            "text": "Create",
                            "path": "modules/create",
                        },
                        {
                            "text": "View",
                            "path": "modules/index",
                        },
                    ],
                "total": db.session.query(Module).count()
            },
            {
                "id": 5,
                "name": "Profession",
                "links": [
                        {
                            "text": "Create",
                            "path": "professions/create",
                        },
                        {
                            "text": "View",
                            "path": "professions/index",
                        },
                    ],
                "total": db.session.query(Profession).count()
            },
            {

                "id": 6,
                "name": "Student",
                "links": [
                        {
                            "text": "Create",
                            "path": "students/create",
                        },
                        {
                            "text": "View",
                            "path": "students/index",
                        },
                    ],
                "total": db.session.query(Student).count()
            },
        
        
        ]
        return jsonify(models)
       
