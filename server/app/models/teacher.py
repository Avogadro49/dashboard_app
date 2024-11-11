from app.utils import db
# from app.models.teacher_collage import teacher_collage


teacher_collage = db.Table(
    'teacher_college',
    db.Column('id', db.BigInteger, primary_key=True, autoincrement=True), 
    db.Column('teacher_id', db.BigInteger, db.ForeignKey('teachers.id'), primary_key=True),
    db.Column('collage_id', db.BigInteger, db.ForeignKey('collages.id'), primary_key=True)
)

class Teacher(db.Model):
    __tablename__ = 'teachers'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.BigInteger, nullable=False)
    avatar = db.Column(db.String(255), nullable=True)

    # Relationship to Collage model through the TeacherCollage table
    collages = db.relationship('College', secondary=teacher_collage, back_populates='teachers')

