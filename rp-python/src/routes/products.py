from flask import Blueprint

products = Blueprint('products', __name__)

@products.route('/products', methods=['GET'])
def products_get():
    return "Hello from products 1"