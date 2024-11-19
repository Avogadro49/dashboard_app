from app.utils import db

class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    group_id = db.Column(db.BigInteger, nullable=True, default=None)