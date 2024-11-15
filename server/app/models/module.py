from app.utils import db

teacher_module = db.Table(
    'teacher_module',
    db.Column('teacher_id', db.BigInteger, db.ForeignKey('teachers.id'), primary_key=True),
    db.Column('module_id', db.BigInteger, db.ForeignKey('modules.id'), primary_key=True)
)

module_profession = db.Table(
    'module_profession',
    db.Column('module_id', db.BigInteger, db.ForeignKey('modules.id'), primary_key=True),
    db.Column('profession_id', db.BigInteger, db.ForeignKey('professions.id'), primary_key=True)
)

class Module(db.Model):
    __tablename__ = 'modules'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    requirements = db.Column(db.String(255), nullable=False)
    code = db.Column(db.Integer, nullable=False)

    # Relationship to associated model through the associated tables =>
    teachers = db.relationship('Teachers', secondary=teacher_module, back_populates='modules')
    profession = db.relationship('Profession', secondary=module_profession, back_populates='modules')