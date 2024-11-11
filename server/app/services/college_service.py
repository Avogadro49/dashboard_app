from app.utils import db
from app.models.college import College


class CollegeService:
    @staticmethod
    def create_college(college_data):
        try:
            college = College(
                name=college_data["name"],
                location=college_data['location'],
                email=college_data["email"],
                phone=college_data["phone"],
                logo=college_data.get("logo")
            )
            db.session.add(college)
            db.session.commit()
            return college
        except Exception as e:
            db.session.rollback()
            raise Exception(f"Error creating college: {str(e)}")