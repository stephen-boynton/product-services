from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
import json
from src.controllers.product_controller import ProductController
from src.routes.route_schemas import ProductFilterSchema

products = Blueprint('products', __name__)

@products.route('/products', methods=['GET'])
def products_get():
    print(request.args)
    schema = ProductFilterSchema()
    
    try:
        schema.load(request.args)
    except ValidationError as e:
        return e.messages, 400

    response = ProductController.get_all_products(schema.dump(request.args))
    if isinstance(response, list):
        return jsonify(response)
    return response


@products.route('/products/<string:product_id>', methods=['GET'])
def product_get(product_id: str) -> json:
    response = ProductController.get_product_by_id(product_id)
    if response is None:
        return 'Product not found', 404
    return jsonify(response)

@products.route('/products/<string:product_id>', methods=['DELETE'])
def product_delete(product_id: str) -> json:
    response = ProductController.delete_product_by_id(product_id)
    if response is None:
        return 'Product not found', 404
    return jsonify(response)