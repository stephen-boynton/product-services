from routes import create_app
from logging import getLogger

app = create_app()
me = 2

if __name__ == "__main__":
    getLogger().info(f"me: {me}")
    app.run(host='0.0.0.0', port=5000, debug=True)