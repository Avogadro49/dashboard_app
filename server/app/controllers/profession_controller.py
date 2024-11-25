from flask import request, jsonify, abort
from app.models.profession import Profession
from app.schemas.profession_schema import ProfessionSchema
from app.services.profession_service import ProfessionService
from app.utils.extensions import db
from sqlalchemy.exc import SQLAlchemyError



class ProfessionController:
    @staticmethod
    def store():
        try:
            profession_schema = ProfessionSchema()
            new_profession_data = profession_schema.load(request.json)
            new_profession = ProfessionService.create_profession(new_profession_data)
            return profession_schema.dump(new_profession), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)})
        
    @staticmethod
    def index():
        try:
            professions = Profession.query.all()
            profession_schema = ProfessionSchema(many=True)
            return jsonify({ "data": profession_schema.dump(professions), "total": len(professions)})
        except SQLAlchemyError as e:
            return jsonify({'error': "Error occurred", "details": str(e)})
    
    @staticmethod
    def show(profession_id):
        profession = Profession.query.get(profession_id)
        if profession is None:
            abort(404)
        profession_schema = ProfessionSchema()
        return profession_schema.dump(profession)
    
    @staticmethod
    def update(profession_id):
        try:
            profession_data = request.json
            updated_profession = ProfessionService.update_profession(profession_id, profession_data)
            profession_schema = ProfessionSchema()
            return profession_schema.dump(updated_profession), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400
        
    @staticmethod
    def delete(profession_id):
        profession = Profession.query.get(profession_id)
        if profession is None:
            abort(404)

        db.session.delete(profession)
        db.session.commit()
        return jsonify({"message": "Profession deleted successfully."}), 204