from typing import Optional
from marshmallow import Schema, fields, ValidationError, validate
from datetime import datetime

sortable_fields: list[str] = [
    'product', 'price', 'isOnSale', 'stock', 'sale_discount', 'sale_date_end' 
    ]

def validate_date_format(date_str: str):
    try:
        datetime.strptime(date_str, '%Y-%m-%d')
    except ValueError:
        raise ValidationError('Date must be in YYYY-MM-DD format.')

class ProductFilterSchema(Schema):
    is_sale = fields.Boolean()
    limit = fields.Integer()
    sort = fields.String(validate=validate.OneOf(sortable_fields))
    
class ProductPostSchema(Schema):
    description = fields.String(required=True)
    image = fields.String(required=True)
    isOnSale = fields.Boolean(required=True)
    price = fields.String(required=True)
    product = fields.String(required=True)
    sale_date_end = fields.String(required=True, validate=validate_date_format)
    sale_discount = fields.Float(required=True)
    stock = fields.Integer(required=True)
    
