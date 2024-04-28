FROM node:20-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install @nestjs/cli -g
COPY . .

EXPOSE 3001

CMD ["nest", "start", "--watch"]