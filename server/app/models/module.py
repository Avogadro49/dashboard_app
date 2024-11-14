from app.utils import db


class Module(db.Model):
    __tablename__ = 'modules'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    requirements = db.Column(db.String(255), nullable=False)
    code = db.Column(db.integer, nullable=False)