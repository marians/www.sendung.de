PWD := $(shell pwd)

.PHONY: all

render:
	docker run --rm -v $(PWD):/workdir -w /workdir peaceiris/hugo:v0.143.1-full --destination docs
