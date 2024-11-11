from marshmallow import Schema, fields, validate

class ProfessionSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True, validate=validate.Length(max=255))
    description = fields.Str(required=True)
    code = fields.Int(required=True)
