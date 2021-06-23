all: lint

lint:
	bash scripts/lint.sh

deploy: lint
	bash scripts/deploy.sh

.PHONY: all lint deploy