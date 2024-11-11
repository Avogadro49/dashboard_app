from app.utils import db

class Profession(db.Model):
    __tablename__ = 'professions'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    code = db.Column(db.SmallInteger, nullable=False)
