FROM node:20-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./
COPY node_modules ./node_modules
RUN npm install
RUN npm install @nestjs/cli -g
COPY ./src .

EXPOSE 3001

CMD ["npm", "run", "dev"]