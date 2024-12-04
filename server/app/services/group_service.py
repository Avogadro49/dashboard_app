from app.utils.extensions import db
from app.models.group import Group
from app.schemas.group_schema import GroupSchema
from sqlalchemy.exc import SQLAlchemyError


class GroupService:
    @staticmethod
    def create_group(group_data):
        # try:
            group = Group(
                group_number=group_data["group_number"],
                profession_id=group_data["profession_id"],
                college_id=group_data["college_id"],
            )
            db.session.add(group)
            db.session.commit()
            return group
        # except Exception as e:
        #     db.session.rollback()
        #     raise Exception(f"Error creating group: {str(e)}")
    
    def update_group(group_id, group_data):
        group = Group.query.get(group_id)
        
        if group is None:
            raise ValueError("Teacher not found")
        
        try:
            group_schema = GroupSchema()
            updated_group = group_schema.load(group_data)
            
            for key, value in updated_group.items():
                setattr(group, key, value)
            
            db.session.commit()

            return updated_group
        except SQLAlchemyError as e:
            db.session.rollback()
            raise Exception(f"Database error: {str(e)}")
        except ValueError as e:
            raise e
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error updating group: {str(e)}")
