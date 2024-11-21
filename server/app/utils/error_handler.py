import logging
from flask import jsonify
import traceback
import uuid
from datetime import datetime

# Set up a logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

class ErrorHandler:
    
    @staticmethod
    def generate_error_id():
        """Generate a unique error ID for each error instance."""
        return str(uuid.uuid4())
    
    @staticmethod
    def log_error(level, message, exception=None, **context):
        """Centralized logging with different log levels and additional context."""
        error_id = ErrorHandler.generate_error_id()
        context['error_id'] = error_id
        context['timestamp'] = datetime.utcnow().isoformat()

        if exception:
            logger.log(level, f"{message} - {exception} - Context: {context}")
        else:
            logger.log(level, f"{message} - Context: {context}")
        
        return error_id

    @staticmethod
    def integrity_error(e):
        # Handle database integrity errors (e.g., duplicate entry).
        # if "email" in str(e).lower():
        #     return jsonify({"error": "A college with this email already exists!"}), 400
        # if "name" in str(e).lower():
        #     return jsonify({"error": "A college with this name already exists!"}), 400
        
        # Fallback for general integrity errors
        return jsonify({"error": "A resource with a unique constraint already exists!"}), 400

    @staticmethod
    def data_error(exception=None):
        # Handle invalid data errors.
        error_id = ErrorHandler.log_error(
            logging.WARNING,
            "Invalid data type or value provided.",
            exception
        )
        return jsonify({
            "error": "Invalid data type or value provided. Please check your input and try again.",
            # "error_id": error_id
        }), 400

    @staticmethod
    def operational_error(exception=None):
        # Handle operational errors, such as database connection failures.
        error_id = ErrorHandler.log_error(
            logging.CRITICAL,
            "Operational error occurred, possibly due to database connection issues.",
            exception
        )
        return jsonify({
            "error": "A database connection error occurred. Please try again later.",
            "error_id": error_id
        }), 500

    @staticmethod
    def programming_error(exception=None):
        # Handle programming errors in SQL queries.
        error_id = ErrorHandler.log_error(
            logging.ERROR,
            "Programming error in SQL query.",
            exception
        )
        return jsonify({
            "error": "A database query error occurred. Please contact the administrator.",
            "error_id": error_id
        }), 500

    @staticmethod
    def not_found_error(exception=None):
        # Handle resource not found errors.
        error_id = ErrorHandler.log_error(
            logging.WARNING,
            "Requested resource was not found.",
            exception
        )
        return jsonify({
            "error": "The requested resource could not be found.",
            "error_id": error_id
        }), 404

    @staticmethod
    def sqlalchemy_error(exception):
        # Handle general SQLAlchemy errors.
        error_id = ErrorHandler.log_error(
            logging.ERROR,
            f"General SQLAlchemy error occurred: {str(exception)}",
            exception
        )
        return jsonify({
            "error": "A database error occurred. Please try again later.",
            "error_id": error_id
        }), 500

    @staticmethod
    def generic_error(exception):
        # Handle all unexpected errors.
        error_id = ErrorHandler.log_error(
            logging.ERROR,
            "An unexpected error occurred.",
            exception
        )
        return jsonify({
            "error": "An unexpected error occurred. Please try again later.",
            "error_id": error_id
        }), 500
