from marshmallow import Schema, fields

class ModuleSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    requirements = fields.Str(required=True)
    code = fields.Int(required=True)

    # Nested field for associated schemas =>
    teachers = fields.List(fields.Nested('TeacherSchema', only=("id", "name")), dump_only=True)
    professions = fields.List(fields.Nested('ProfessionSchema', only=('id', 'name')), dump_only=True)

    class Meta:
        load_instance = True
        include_fk = True