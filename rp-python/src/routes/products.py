from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
import json
from src.controllers.product_controller import ProductController
from .route_schemas import ProductFilterSchema, ProductPostSchema
from flask_cors import CORS, cross_origin

products_bp = Blueprint('products', __name__)

@products_bp.route('/products', methods=['GET'])
@cross_origin()
def products_get():
    schema = ProductFilterSchema()
    
    try:
        schema.load(request.args)
    except ValidationError as e:
        return e.messages, 400

    response = ProductController.get_all_products(schema.dump(request.args))
    
    return jsonify([product.to_dict() for product in response])


@products_bp.route('/products/<string:product_id>', methods=['GET'])
@cross_origin()
def product_get_by_id(product_id: str) -> json:
    response = ProductController.get_product_by_id(product_id)
    if response is None:
        return 'Product not found', 404
    return jsonify(response.to_dict())

@products_bp.route('/products/<string:product_id>', methods=['DELETE'])
@cross_origin()
def product_delete_by_id(product_id: str) -> json:
    response = ProductController.delete_product_by_id(product_id)
    if response is None:
        return 'Product not found', 404
    return jsonify(response)

@products_bp.route('/products/<string:product_id>', methods=['PATCH'])
@cross_origin()
def product_patch_by_id(product_id: str) -> json:
    product_data = request.json
    response = ProductController.patch_product_by_id(product_id, product_data)
    if response is None:
        return 'Product not found', 404
    return jsonify(response)

@products_bp.route('/products', methods=['POST'])
@cross_origin()
def product_post() -> json:
    schema = ProductPostSchema()
    try:
        schema.load(request.json)
    except ValidationError as e:
        return e.messages, 400
    product_data = request.json
    response = ProductController.post_product(product_data)
    return jsonify(response)