from server.app.utils.utils import db

class Group(db.Model):
    __tablename__ = "groups"

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    group_number = db.Column(db.BigInteger, nullable=False)
    profession_id = db.Column(db.BigInteger, db.ForeignKey('professions.id'), nullable=False)
    college_id = db.Column(db.BigInteger, db.ForeignKey('colleges.id'), nullable=False)

    # Relationship with College
    # college = db.relationship('College', back_populates='groups', lazy=True)
    college = db.relationship('College', back_populates = "groups", lazy=True)
    student = db.relationship('Student', back_populates = 'group', lazy=True)
    # profession = db.relationship('Profession', back_populates='groups', lazy=True)

    def __repr__(self):
        return f'<Group {self.group_number}>'