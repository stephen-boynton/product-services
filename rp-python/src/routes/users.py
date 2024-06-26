from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
import json
from src.controllers.user_controller import UserController
from .route_schemas import ProductFilterSchema, ProductPostSchema
from flask_cors import CORS, cross_origin

user_bp = Blueprint('users', __name__)

@user_bp.route('/users/<string:user_id>', methods=['GET'])
@cross_origin()
def user_by_id(user_id: str) -> json:
    response = UserController.get_user_by_id(user_id)
    return jsonify(response)

@user_bp.route('/users', methods=['POST'])
@cross_origin()
def create_user() -> json:
    try:
        user = ProductPostSchema().load(request.json)
        response = UserController.create_user(user)
        return jsonify(response)
    except ValidationError as e:
        return jsonify(e.messages), 400
    
@user_bp.route('/users/<string:user_id>', methods=['PUT'])
@cross_origin()
def update_user(user_id: str) -> json:
    try:
        user = ProductPostSchema().load(request.json)
        response = UserController.update_user(user_id, user)
        return jsonify(response)
    except ValidationError as e:
        return jsonify(e.messages), 400

@user_bp.route('/users/username/<string:username>', methods=['GET'])
@cross_origin()
def user_by_username(username: str) -> json:
    response = UserController.get_user_by_username(username)
    return jsonify(response)