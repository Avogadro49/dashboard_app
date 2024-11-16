from app.models.profession import Profession
from app.models.college import College
from app.controllers.association_controller import AssociationController

class CollegeProfessionController:
    @staticmethod
    def store():
        return AssociationController.store(College, Profession, 'professions')
    
    @staticmethod
    def delete():
        return AssociationController.delete(College, Profession, 'professions')