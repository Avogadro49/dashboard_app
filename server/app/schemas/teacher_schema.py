from marshmallow import Schema, fields
from sqlalchemy import UniqueConstraint
# from app.schemas.college_schema import CollegeSchema

class TeacherSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True, unique=True,)
    email = fields.Str(required=True)
    phone = fields.Str(required=True)
    avatar = fields.Str(allow_none=True)
    
    # Nested field for associated collages
    colleges = fields.List(fields.Nested("CollegeSchema", only=("id", "name")), dump_only=True)
    modules = fields.List(fields.Nested('ModuleSchema', only=("id", "name")), dump_only=True)


    class Meta:
        load_instance = True
        include_fk = True
