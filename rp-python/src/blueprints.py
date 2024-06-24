from flask import Flask
from routes.products import products_bp
from routes.reviews import reviews_bp

def register_blueprints(app: Flask):
    app.register_blueprint(products_bp)
    app.register_blueprint(reviews_bp)