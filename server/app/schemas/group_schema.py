from marshmallow import Schema, fields

class GroupSchema(Schema):
    id = fields.Int(dump_only=True)
    group_number = fields.Int(required=True)
    profession_id = fields.Int(required=False)
    college_id = fields.Int(required=False)

    class Meta:
        load_instance = True
        include_fk = True