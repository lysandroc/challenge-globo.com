FROM node:8-slim

WORKDIR /app
ENV NODE_ENV development

COPY package.json /app/package.json

RUN npm i -g nodemon
RUN npm install

COPY . /app

CMD ["npm","start"]

EXPOSE 3001
