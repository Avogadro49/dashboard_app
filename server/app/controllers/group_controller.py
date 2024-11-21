from flask import jsonify, request, abort
from app.models.group import Group
from app.schemas.group_schema import GroupSchema
from app.services.group_service import GroupService
from server.app.utils.utils import db
from sqlalchemy.exc import SQLAlchemyError


class GroupController:
    @staticmethod
    def store():
        try:
            group_schema = GroupSchema()
            new_group_data = group_schema.load(request.json)
            new_group = GroupService.create_group(new_group_data)
            return group_schema.dump(new_group), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400

    
    @staticmethod
    def index():
        try:
            groups = Group.query.all()
            groups_schema = GroupSchema(many=True)
            return groups_schema.dump(groups)
        except SQLAlchemyError as e:
            return jsonify({"error": "Database error occurred", "details": str(e)})
        

    @staticmethod
    def show(group_id):
        group = Group.query.get(group_id)
        if group is None:
            abort(404)
        group_schema = GroupSchema()
        return group_schema.dump(group)
    
    @staticmethod
    def update(group_id):
        try:
            group_data = request.json
            updated_group = GroupService.update_teacher(group_id, group_data)
            group_schema = GroupSchema()
            return group_schema.dump(updated_group), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 400
        
    @staticmethod
    def delete(group_id):
        group = Group.query.get(group_id)
        if group is None:
            abort(404)

        db.session.delete(group)
        db.session.commit()
        return jsonify({"message": "Group deleted successfully."}), 204