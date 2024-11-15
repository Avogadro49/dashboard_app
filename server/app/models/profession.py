from app.utils import db
from app.models.module import module_profession

college_profession = db.Table(
    'college_profession',
    db.Column('college_id', db.BigInteger, db.ForeignKey('colleges.id'), primary_key=True),
    db.Column('profession_id', db.BigInteger, db.ForeignKey('professions.id'), primary_key=True)
)

class Profession(db.Model):
    __tablename__ = 'professions'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    code = db.Column(db.SmallInteger, nullable=False)

    # Relationship to associated model through the associated tables =>
    colleges = db.relationship('Teacher', secondary=college_profession, back_populates='professions')
    modules = db.relationship('Modules', secondary=module_profession, back_populates='professions')