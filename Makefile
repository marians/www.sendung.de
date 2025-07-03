PWD := $(shell pwd)

.PHONY: all

render:
	docker run --rm -v $(PWD):/workdir -w /workdir peaceiris/hugo:v0.134.3-full --destination docs
