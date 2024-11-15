from marshmallow import Schema, fields, validate

class ProfessionSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True, validate=validate.Length(max=255))
    description = fields.Str(required=True)
    code = fields.Int(required=True)

    # Nested field for associated schemas =>
    colleges = fields.List(fields.Nested("CollegeSchema", only=("id", "name")), dump_only=True)
    modules = fields.List(fields.Nested('ModuleSchema', only=("id", "name")), dump_only=True)

    class Meta:
        load_instance = True
        include_fk = True