FROM node:12

WORKDIR /usr/test/
COPY package*.json ./

RUN npm install

COPY . . 

CMD npm start