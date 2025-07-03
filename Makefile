PWD := $(shell pwd)

.PHONY: all

render:
	docker run --rm -v $(PWD):/workdir -w /workdir peaceiris/hugo:v0.139.3-full --destination docs
