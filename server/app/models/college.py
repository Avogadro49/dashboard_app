from app.utils import db
# from app.models.teacher_collage import teacher_collage
from app.models.teacher import teacher_college
from app.models.profession import college_profession

class College(db.Model):
    __tablename__ = 'colleges'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.BigInteger, nullable=False)
    logo = db.Column(db.String(255), nullable=False)

    # Relationship to associated model through the associated tables =>
    teachers = db.relationship('Teacher', secondary=teacher_college, back_populates='colleges')
    professions = db.relationship('Profession', secondary=college_profession, back_populates='colleges')
