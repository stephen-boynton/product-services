from ..app import db

class Review(db.Model):
    __tablename__ = 'ratings'
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating_id = db.Column(db.Integer, db.ForeignKey('ratings.id'), nullable=False)
    review = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<Review {self.name}>'
