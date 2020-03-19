.PHONY: dev bash-dev bash-prod logs-dev logs-prod stop-dev rm-dev rm-prod stop-prod help
.DEFAULT_GOAL: help

default: help

help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

# init: ## Check if riisq network exists and create one if necessary
# 	if [!"$(docker network ls -q -f name=riisq)"]; then
# 		@docker network create riisq --driver bridge --subnet 172.23.0.0/16
# 	fi
bash-dev: ## Open a bash console into the dev container
	@docker exec -ti eos-website-dev bash

bash-prod: ## Open a bash console into the prod container
	@docker exec -ti eos-website-prod bash

logs-dev: ## Output logs from the dev container
	@docker container logs eos-website-dev

logs-prod: ## Output logs from the prod container
	@docker container logs eos-website-prod


dev:  ## Run a development environment on port 80
	@docker-compose -f docker/development/docker-compose.yml up --build -d

stop-dev:  ## Stops the development environment on port 80
	@docker-compose -f docker/development/docker-compose.yml stop

rm-dev:  ## Stops and remove development environment
	@docker-compose -f docker/development/docker-compose.yml down --rmi all

prod: ## Run a production environment on port 80
	@docker-compose -f docker/production/docker-compose.yml up --build -d

stop-prod:  ## Stops the production environment on port 80
	@docker-compose -f docker/production/docker-compose.yml stop

rm-prod:  ## Stops and remove development environment
	@docker-compose -f docker/production/docker-compose.yml down --rmi all
