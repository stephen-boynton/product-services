from flask import Blueprint
import json
import sys
import os
# Get the current directory of the script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the JSON file in the sibling directory
json_file_path = os.path.join(current_dir, '..', 'data', 'products.json')
with open(json_file_path, 'r') as json_file:
    products_data = json.load(json_file)

products = Blueprint('products', __name__)

@products.route('/products', methods=['GET'])
def products_get():
    return products_data