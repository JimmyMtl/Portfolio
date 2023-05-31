FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

RUN mkdir node_modules/.vite && chmod -R 777 node_modules/.vite

COPY . .

CMD ["npm", "run", "dev"]