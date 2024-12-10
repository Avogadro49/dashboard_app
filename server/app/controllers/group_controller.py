from flask import jsonify, request, abort
from app.models.group import Group
from app.schemas.group_schema import GroupSchema
from app.services.group_service import GroupService
from app.utils.extensions import db
from app.utils.error_handler import ErrorHandler
from sqlalchemy.exc import SQLAlchemyError, IntegrityError


class GroupController:
    @staticmethod
    def store():
        try:
            group_schema = GroupSchema()
            new_group_data = group_schema.load(request.json)
            new_group = GroupService.create_group(new_group_data)
            return group_schema.dump(new_group), 201
        except IntegrityError as e:
            db.session.rollback()
            return ErrorHandler.integrity_error(e)
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)

    
    @staticmethod
    def index():
        try:
            groups = Group.query.all()
            groups_schema = GroupSchema(many=True)
            return jsonify({ "data": groups_schema.dump(groups), "total": len(groups)})
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error(e)
        

    @staticmethod
    def show(group_id):
        try:
            group = Group.query.get(group_id)
            if group is None:
                abort(404)
            group_schema = GroupSchema()
            return group_schema.dump(group)
        except SQLAlchemyError as e:
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            return ErrorHandler.generic_error(e)
    
    @staticmethod
    def update(group_id):
        try:
            group_data = request.json
            updated_group = GroupService.update_teacher(group_id, group_data)
            group_schema = GroupSchema()
            return group_schema.dump(updated_group), 200
        except IntegrityError as e:
            db.session.rollback()
            return ErrorHandler.integrity_error(e)
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)
        
    @staticmethod
    def delete(group_id):
        try:
            group = Group.query.get(group_id)
            if group is None:
                return ErrorHandler.not_found_error()
            db.session.delete(group)
            db.session.commit()
            return jsonify({"message": "Group deleted successfully."}), 204
        except SQLAlchemyError as e:
            db.session.rollback()
            return ErrorHandler.sqlalchemy_error()
        except Exception as e:
            db.session.rollback()
            return ErrorHandler.generic_error(e)