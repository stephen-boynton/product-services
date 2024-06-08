from src.routes import create_app
from logging import getLogger

app = create_app()

if __name__ == "__main__":
    logger = getLogger()
    logger.info('Starting server')
    app.run(host='0.0.0.0', port=5000, debug=True)