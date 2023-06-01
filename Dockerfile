FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --silent
RUN #mkdir node_modules/.vite && chmod -R 777 node_modules/.vite

COPY . ./

#CMD ["ls", "-la"]
CMD ["npm", "run", "dev"]