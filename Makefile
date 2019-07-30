default: test
.PHONY: default

install_prerequisites:
	npm install
	npm install -g mocha
.PHONY: install_prerequisites

generate_tests:
	hiptest-publisher -c mocha.conf -t "$(SECRET_TOKEN)" --without=actionwords
.PHONY: generate_tests

test: install_prerequisites
	mocha test --recursive
.PHONY: test
