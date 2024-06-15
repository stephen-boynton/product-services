from ..app import db
from sqlalchemy import CheckConstraint

class Rating(db.Model):
    __tablename__ = 'ratings'
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    __table_args__ = (
        CheckConstraint('score >= 1 AND score <= 5', name='check_score_range'),
    )

    def __repr__(self):
        return f'<Rating {self.name}>'
