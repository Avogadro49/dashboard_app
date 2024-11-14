from marshmallow import Schema, fields

class ModuleSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    requirements = fields.Str(required=True)
    code = fields.Int(required=True)

    class Meta:
        load_instance = True
        include_fk = True