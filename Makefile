PWD := $(shell pwd)

.PHONY: all

render:
	docker run --rm -v $(PWD):/workdir -w /workdir peaceiris/hugo:v0.145.0-full --destination docs
