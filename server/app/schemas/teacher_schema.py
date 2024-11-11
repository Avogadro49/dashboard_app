from marshmallow import Schema, fields
# from app.schemas.collage_schema import CollageSchema

class TeacherSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    email = fields.Str(required=True)
    phone = fields.Int(required=True)
    avatar = fields.Str(allow_none=True)

    # Nested field for associated collages
    # collages = fields.List(fields.Nested(CollageSchema), dump_only=True)

    class Meta:
        load_instance = True
        include_fk = True