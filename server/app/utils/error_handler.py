import logging
from flask import jsonify
from app.models.college import College



class ErrorHandler:
    
    @staticmethod
    def integrity_error(e):
        if e.orig and e.orig.args[0] == 1062: 
            if 'name' in str(e.orig):
                return jsonify({"error": "name already exists!"}), 400
            elif 'email' in str(e.orig):
                return jsonify({"error": "email already exists!"}), 400
            elif 'phone' in str(e.orig):
                return jsonify({"error": "phone number already exists!"}), 400
            elif 'code' in str(e.orig):
                return jsonify({"error": "Code must be unique!"}), 400
            elif 'location' in str(e.orig):
                return jsonify({"error": "Location must be unique!"}), 400

         # Fallback for general integrity errors
        logging.error(f"IntegrityError: {str(e)}")
        return jsonify({"error": "A resource with a unique constraint already exists!"}), 400
    @staticmethod
    def data_error():
        # Handle invalid data errors
        return jsonify({
            "error": "Invalid data type or value provided. Please check your input and try again.",
        }), 400

    @staticmethod
    def operational_error():
        # Handle operational errors, such as database connection failures.
        return jsonify({
            "error": "A database connection error occurred. Please try again later.",
        }), 500

    @staticmethod
    def not_found_error():
        # Handle resource not found errors.

        return jsonify({
            "error": "The requested resource could not be found.",
        }), 404

    @staticmethod
    def sqlalchemy_error(e):
        # Handle general SQLAlchemy errors.
        return jsonify({
            "error": "A database error occurred. Please try again later."
        }), 500

    @staticmethod
    def generic_error(e=None):
        # Handle all unexpected errors.
        return jsonify({
            "error": "An unexpected error occurred. Please try again later.",
        }), 500
