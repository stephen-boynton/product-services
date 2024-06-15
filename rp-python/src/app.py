from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from extensions import db

POSTGRES_CONNECTION = os.getenv('DATABASE_URL', 'postgresql://admin:admin@postgres:5432/odin')

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = POSTGRES_CONNECTION
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # Initialize db with app
    print('Initializing db with app')
    db.init_app(app)
    print('Initialized db with app')
    
    # Register Blueprints
    from blueprints import register_blueprints
    register_blueprints(app)
    
    return app

app = create_app()
