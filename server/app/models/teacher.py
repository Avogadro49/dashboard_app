from app.utils import db

class Teacher(db.Model):
    __tablename__ = 'Teachers'

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    avatar = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        return f'<Teacher {self.name}>'
