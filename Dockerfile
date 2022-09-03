# syntax=docker/dockerfile:1
FROM node:16.15.1
WORKDIR /app
COPY ["package.json", "package-lock.json*", "tsconfig.json", "./"]
RUN npm install -g typescript && npm install && npm install -g ts-node
COPY . .
CMD [ "ts-node", "./src/index.ts"]