run_dev:
	 docker-compose up --build

run_auth:
	 docker-compose --profile auth up --build

.POHNY: run_dev run_auth
