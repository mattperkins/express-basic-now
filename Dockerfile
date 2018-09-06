FROM node:8.11-alpine

RUN apk update

ENV NODE_ENV production
ENV PORT 3003

EXPOSE 3003

WORKDIR /usr/src/node-app

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "start"]
