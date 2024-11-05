from marshmallow import Schema, fields

class TeacherSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    email = fields.Str(required=True)
    phone = fields.Int(required=True)
    avatar = fields.Str(allow_none=True)

class Meta:
    load_instance = True
    include_fk = True