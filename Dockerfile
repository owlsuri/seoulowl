FROM node:14


WORKDIR /seoulowl/
COPY . /seoulowl/

RUN yarn install
RUN yarn build:ssr
CMD yarn start

