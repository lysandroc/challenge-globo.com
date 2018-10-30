FROM node:8-slim

WORKDIR /app
ENV NODE_ENV development

COPY package.json /app/package.json

RUN npm install --production

COPY . /app

CMD ["npm","start"]

EXPOSE 8080
