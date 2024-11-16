from app.models.module import Module
from app.models.profession import Profession
from app.controllers.association_controller import AssociationController

class ModuleProfessionController:
    @staticmethod
    def store():
        return AssociationController.store(Module, Profession, 'professions')
    
    @staticmethod
    def delete():
        return AssociationController.delete(Module, Profession, 'professions')