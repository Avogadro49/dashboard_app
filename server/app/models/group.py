from app.utils import db

class Group(db.Model):
    __tablename__ = "groups"

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    group_number = db.Column(db.BigInteger, nullable=False)
    profession_id = db.Column(db.BigInteger, nullable=False)
    collage_id = db.Column(db.BigInteger, nullable=False)


    def __repr__(self):
        return f'<Group {self.group_number}>'