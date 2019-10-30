.PHONY: demo

demo:
	docker build -t jwplatform-node .
	docker run --init -it \
		-e API_KEY=${API_KEY} \
		-e API_SECRET=${API_SECRET} \
		-e ACCOUNT_KEY=${ACCOUNT_KEY} \
		-e CHANNEL_KEY=${CHANNEL_KEY} \
		-e CONVERSION_KEY=${CONVERSION_KEY} \
		-e PLAYER_KEY=${PLAYER_KEY} \
		-e TAG_NAME=${TAG_NAME} \
		-e TRACK_KEY=${TRACK_KEY} \
		-e VIDEO_KEY=${VIDEO_KEY} \
		jwplatform-node examples/${DEMO}.js
