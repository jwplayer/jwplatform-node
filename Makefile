.PHONY: demo

demo:
	docker build -t jwplatform-node .
	docker run --init -it \
		-e API_KEY=${API_KEY} \
		-e API_SECRET=${API_SECRET} \
		-e VIDEO_KEY=${VIDEO_KEY} \
		jwplatform-node examples/${DEMO}.js
