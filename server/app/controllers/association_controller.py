from flask import request, jsonify
from app.utils.extensions import db

class AssociationController:
    @staticmethod
    def store(model_a, model_b, relationship_attr):
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

        # Add the relationship
        relationship = getattr(model_a_instance, relationship_attr)
        
        # Avoid duplicates in the relationship
        if model_b_instance not in relationship:
            relationship.append(model_b_instance)
            db.session.commit()

        return jsonify({'message': f'{model_a.__name__} and {model_b.__name__} association created'}), 200
        
    @staticmethod
    def delete(model_a, model_b, relationship_attr):
        data = request.get_json()

        model_a_id = data.get(f'{model_a.__name__.lower()}_id')
        model_b_id = data.get(f'{model_b.__name__.lower()}_id')

        if not model_a_id or not model_b_id:
            return jsonify({'error': f'{model_a.__name__} or {model_b.__name__} ID missing'}), 400

        model_a_instance = model_a.query.get(model_a_id)
        model_b_instance = model_b.query.get(model_b_id)

        if not model_a_instance or not model_b_instance:
            return jsonify({'error': f'{model_a.__name__} or {model_b.__name__} not found'}), 404

        relationship = getattr(model_a_instance, relationship_attr)
        
        if model_b_instance in relationship:
            relationship.remove(model_b_instance)
            db.session.commit()

        return jsonify({'message': f'{model_a.__name__} and {model_b.__name__} association deleted'}), 200
            