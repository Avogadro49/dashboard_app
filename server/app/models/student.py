from app.utils.utils import db

class Student(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    group_id = db.Column(db.BigInteger, db.ForeignKey('groups.id'), default=None)


    group = db.relationship('Group', back_populates = 'student', lazy=True)