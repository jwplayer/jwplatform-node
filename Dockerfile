FROM node:12.13-stretch-slim

ENV APP_DIR=/app

WORKDIR $APP_DIR

COPY package.json $APP_DIR/package.json
RUN yarn install

COPY jwplatform $APP_DIR/examples/jwplatform
COPY examples $APP_DIR/examples

ENTRYPOINT ["node"]
