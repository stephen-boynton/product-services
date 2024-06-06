from flask import Flask

def create_app():
    app = Flask(__name__)

    from .products import products

    app.register_blueprint(products)

    return app