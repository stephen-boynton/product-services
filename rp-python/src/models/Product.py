from ..app import db

class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    sale_discount = db.Column(db.Numeric(5, 2), nullable=False)
    is_on_sale = db.Column(db.Boolean, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)
    sale_date_end = db.Column(db.DateTime, nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __repr__(self):
        return f'<Product {self.name}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'stock': self.stock,
            'description': self.description,
            'price': str(self.price),  # Convert to string to avoid serialization issues
            'sale_discount': str(self.sale_discount),  # Convert to string to avoid serialization issues
            'is_on_sale': self.is_on_sale,
            'image_url': self.image_url,
            'sale_date_end': self.sale_date_end.isoformat() if self.sale_date_end else None,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }
