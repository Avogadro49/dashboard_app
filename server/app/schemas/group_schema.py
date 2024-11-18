from marshmallow import Schema, fields

class GroupSchema(Schema):
    id = fields.Int(dump_only=True)
    group_number = fields.Int(required=True)
    profession_id = fields.Int(required=True)
    collage_id = fields.Int(required=True)

    class Meta:
        load_instance = True
        include_fk = True