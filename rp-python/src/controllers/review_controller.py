from typing import Optional

class ReviewsController:
    @staticmethod
    def get_reviews_by_product_id(product_id: str) -> Optional[dict]:
        from ..models.Review import Review
        reviews = Review.query.filter(Review.product_id == product_id).all()
        return [review.to_dict() for review in reviews]
    
    @staticmethod
    def post_review(data: dict) -> Optional[dict]:
        from ..models.Review import Review
        review = Review(**data)
        review.save()
        return review.to_dict()
    
    @staticmethod
    def get_reviews_by_user_id(user_id: str) -> Optional[dict]:
        from ..models.Review import Review
        reviews = Review.query.filter(Review.user_id == user_id).all()
        return [review.to_dict() for review in reviews]
    
    @staticmethod
    def get_review_by_id(review_id: str) -> Optional[dict]:
        from ..models.Review import Review
        review = Review.query.get(review_id)
        return review.to_dict() if review else None
    
    @staticmethod
    def delete_review_by_id(review_id: str) -> Optional[dict]:
        from ..models.Review import Review
        review = Review.query.get(review_id)
        if review:
            review.delete()
            return review.to_dict()
        return None
    
    @staticmethod
    def update_review_by_id(review_id: str, data: dict) -> Optional[dict]:
        from ..models.Review import Review
        review = Review.query.get(review_id)
        if review:
            review.update(data)
            return review.to_dict()
        return None
    
    @staticmethod
    def get_all_reviews() -> Optional[dict]:
        from ..models.Review import Review
        reviews = Review.query.all()
        return [review.to_dict() for review in reviews]
    
    # TODO: this is not scalable
    @staticmethod
    def get_product_rating(product_id: str) -> Optional[dict]:
        from ..models.Review import Review
        reviews = Review.query.filter(Review.product_id == product_id).all()
        if not reviews:
            return None
        rating = sum([review.rating for review in reviews]) / len(reviews)
        return {"rating": rating}