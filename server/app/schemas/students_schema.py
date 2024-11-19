from marshmallow import Schema, fields

class StudentSchema(Schema):
    id = fields.Integer(required=True)
    name = fields.String(required=True)
    email = fields.Email(required=True)
    phone = fields.Integer(required=True)
    group_id = fields.Integer(allow_none=True) 


    class Meta:
        load_instance = True
        include_fk = True
