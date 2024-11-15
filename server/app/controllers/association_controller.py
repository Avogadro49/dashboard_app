from flask import request, jsonify
from app.utils import db

class AssociationController:
    @staticmethod
    # def store(model_a, model_b, relationship_attr):
    #     try:
    #         # Dynamically construct attribute names for JSON keys
    #         model_a_id_key = f'{model_a.__tablename__}_id'
    #         model_b_id_key = f'{model_b.__tablename__}_id'

            
    #         data = request.get_json()
    #         model_a_id = data.get(model_a_id_key)
    #         model_b_id = data.get(model_b_id_key)

    #         print(model_a_id)
    #         print(model_b_id)

    #         instance_a = model_a.query.get(model_a_id)
    #         instance_b = model_b.query.get(model_b_id)

    #         if not instance_a or not instance_b:
    #             return jsonify({"error": f'{model_a.__tablename__} or {model_b.__tablename__} not found'}), 404
            
    #         related_items = getattr(instance_a, relationship_attr)

    #         if instance_b not in related_items:
    #             related_items.append(instance_b)
    #             db.session.commit()
    #             return jsonify({'message': f"Association created successfully"}), 201
    #         else:
    #             return jsonify({'error': 'Association already exists'}), 400
    #     except Exception as e:
    #         db.session.rollback()
    #         return jsonify({'error': str(e)}), 400
    def store(model_a, model_b, relationship_attr):
        # Get the data from the request
        data = request.get_json()

        # Extract ids dynamically
        model_a_id = data.get(f'{model_a.__name__.lower()}_id')  # e.g. 'teacher_id' for Teacher
        model_b_id = data.get(f'{model_b.__name__.lower()}_id')  # e.g. 'college_id' for College

        if not model_a_id or not model_b_id:
            return jsonify({'error': f'{model_a.__name__} or {model_b.__name__} ID missing'}), 400

        # Retrieve the model instances from the database
        model_a_instance = model_a.query.get(model_a_id)
        model_b_instance = model_b.query.get(model_b_id)

        if not model_a_instance or not model_b_instance:
            return jsonify({'error': f'{model_a.__name__} or {model_b.__name__} not found'}), 404

        # Add the relationship dynamically
        relationship = getattr(model_a_instance, relationship_attr)
        
        # Avoid duplicates in the relationship
        if model_b_instance not in relationship:
            relationship.append(model_b_instance)
            db.session.commit()

        return jsonify({'message': f'{model_a.__name__} and {model_b.__name__} association created'}), 200
        
    @staticmethod
    # def delete(model_a, model_b, relationship_attr):
    #     try:
    #         # Dynamically construct attribute names for JSON keys
    #         model_a_id_key = f'{model_a.__tablename__}_id'
    #         model_b_id_key = f'{model_b.__tablename__}_id'

    #         data = request.get_json()
    #         model_a_id = data.get(model_a_id_key)
    #         model_b_id = data.get(model_b_id_key)

    #         instance_a = model_a.query.get(model_a_id)
    #         instance_b = model_b.query.get(model_b_id)

    #         if not instance_a or not instance_b:
    #             return jsonify({'error': f'{model_a.__tablename__} or {model_b.__tablename__} not found'}), 404

    #         related_items = getattr(instance_a, relationship_attr)
    #         if instance_b in related_items:
    #             related_items.remove(instance_b)
    #             db.session.commit()
    #             return jsonify({'message': 'Association deleted successfully'}), 200
    #         else:
    #             return jsonify({'error': 'Association not found'}), 404

    #     except Exception as e:
    #         db.session.rollback()
    #         return jsonify({'error': str(e)}), 400
    def delete(model_a, model_b, relationship_attr):
        # Get the data from the request
        data = request.get_json()

        # Extract ids dynamically
        model_a_id = data.get(f'{model_a.__name__.lower()}_id')
        model_b_id = data.get(f'{model_b.__name__.lower()}_id')

        if not model_a_id or not model_b_id:
            return jsonify({'error': f'{model_a.__name__} or {model_b.__name__} ID missing'}), 400

        # Retrieve the model instances from the database
        model_a_instance = model_a.query.get(model_a_id)
        model_b_instance = model_b.query.get(model_b_id)

        if not model_a_instance or not model_b_instance:
            return jsonify({'error': f'{model_a.__name__} or {model_b.__name__} not found'}), 404

        # Remove the relationship dynamically
        relationship = getattr(model_a_instance, relationship_attr)
        
        if model_b_instance in relationship:
            relationship.remove(model_b_instance)
            db.session.commit()

        return jsonify({'message': f'{model_a.__name__} and {model_b.__name__} association deleted'}), 200
            