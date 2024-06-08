run_dev:
	 docker-compose up --build

run_auth:
	 docker-compose --profile auth up --build

run_fullstack:
	 docker-compose --profile fullstack up --build

.PHONY: run_dev run_auth
