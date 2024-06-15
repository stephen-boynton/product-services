from flask import Flask
from routes.products import products_bp

def register_blueprints(app: Flask):
    app.register_blueprint(products_bp)