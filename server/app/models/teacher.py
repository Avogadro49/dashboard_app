from app.utils.extensions import db
from app.models.module import teacher_module
from sqlalchemy import UniqueConstraint
# from app.models.teacher_collage import teacher_collage


teacher_college = db.Table(
    'teacher_college',
    # db.Column('id', db.BigInteger, primary_key=True, autoincrement=True), 
    db.Column('teacher_id', db.BigInteger, db.ForeignKey('teachers.id'), primary_key=True),
    db.Column('college_id', db.BigInteger, db.ForeignKey('colleges.id'), primary_key=True)
)

class Teacher(db.Model):
    __tablename__ = 'teachers'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone = db.Column(db.String(18), nullable=False, unique=True)
    avatar = db.Column(db.String(255), nullable=True)

    # Relationship to associated model through the associated tables =>
    colleges = db.relationship('College', secondary=teacher_college, back_populates='teachers')
    modules = db.relationship('Module', secondary=teacher_module, back_populates='teachers')
    
    __table_args__ = (
        UniqueConstraint('name', 'email', 'phone', name='_teacher_uc'),
    )