# syntax=docker/dockerfile:1
FROM node:16.15.1 as base
WORKDIR /app
COPY ["package.json", "package-lock.json*", "tsconfig.json", "./"]

FROM base as test
RUN npm ci
RUN npm i -g typescript && npm i -g ts-node
COPY . .
RUN npm run test 

FROM base as prod
COPY . .
RUN npm ci
RUN npm i -g typescript && npm i -g ts-node
CMD [ "ts-node", "./src/index.ts"]