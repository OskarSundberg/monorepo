FROM node:12

WORKDIR /usr/test/src
COPY package*.json ./

RUN npm install

COPY . . 

CMD npm start