from app import app, db
from logging import getLogger

if __name__ == "__main__":
    logger = getLogger()
    logger.info('Starting server')
    app.run(host='0.0.0.0', port=5000, debug=True)
    with app.app_context():
        db.create_all()  # Ensure tables are created
    app.run(debug=True)