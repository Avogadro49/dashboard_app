import logging
from flask import jsonify
from app.models.college import College


class ErrorHandler:
    
    @staticmethod
    def integrity_error(e):
        # Handle database integrity errors (e.g., duplicate entry).
        # if "email" in str(e).lower():
        #     print(str(e).lower())
        #     return jsonify({"error": "A college with this email already exists!"}), 400
        # if "name" in str(e).lower():
        #     return jsonify({"error": "A college with this name already exists!"}), 400
        
        # Fallback for general integrity errors
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
    def sqlalchemy_error():
        # Handle general SQLAlchemy errors.
        return jsonify({
            "error": "A database error occurred. Please try again later."
        }), 500

    @staticmethod
    def generic_error():
        # Handle all unexpected errors.
        return jsonify({
            "error": "An unexpected error occurred. Please try again later.",
        }), 500
