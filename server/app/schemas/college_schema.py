from marshmallow import Schema, fields
# from app.schemas.teacher_schema import TeacherSchema

class CollegeSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    location = fields.Str(required=True)
    email = fields.Email(required=True)
    phone = fields.Int(required=True)
    logo = fields.Str(allow_none=True)

    # Nested field for associated teachers
    teachers = fields.List(fields.Nested("TeacherSchema", only=("id", "name", 'email')), dump_only=True)

    class Meta:
        load_instance = True
        include_fk = True