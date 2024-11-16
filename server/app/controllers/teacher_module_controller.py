from app.models.teacher import Teacher
from app.models.module import Module
from app.controllers.association_controller import AssociationController

class TeacherModuleController:
    @staticmethod
    def store():
        return AssociationController.store(Teacher, Module, 'modules')

    @staticmethod
    def delete():
        return AssociationController.delete(Teacher, Module, 'modules')
