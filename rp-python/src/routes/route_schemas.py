from typing import Optional
from marshmallow import Schema, fields, ValidationError

class ProductFilterSchema(Schema):
    is_sale: Optional[bool] = fields.Boolean()