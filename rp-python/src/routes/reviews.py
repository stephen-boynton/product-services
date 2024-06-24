from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
import json
from src.controllers.review_controller import ReviewsController
from .route_schemas import ReviewPostSchema
from flask_cors import CORS, cross_origin

reviews_bp = Blueprint('reviews', __name__)

@reviews_bp.route('/reviews/product/<string:product_id>', methods=['GET'])
@cross_origin()
def reviews_by_product(product_id: str) -> json:
    response = ReviewsController.get_reviews_by_product_id(product_id)
    return jsonify(response)