from app.utils.extensions import db
# from app.models.teacher_collage import teacher_collage
from app.models.teacher import teacher_college
from app.models.profession import college_profession

class College(db.Model):
    __tablename__ = 'colleges'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    location = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone = db.Column(db.BigInteger, nullable=False)
    logo = db.Column(db.String(255), nullable=False)


    # Optional: Relationship with Group (one-to-many)
    # groups = db.relationship('Group', back_populates='college', lazy=True)
    groups = db.relationship('Group', back_populates = "college")

    # Relationship to associated model through the associated tables =>
    teachers = db.relationship('Teacher', secondary=teacher_college, back_populates='colleges')
    professions = db.relationship(
        'Profession',
        secondary=college_profession,
        primaryjoin="College.id == college_profession.c.college_id",
        secondaryjoin="Profession.id == college_profession.c.profession_id",
        back_populates='colleges'
    )
