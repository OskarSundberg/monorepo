FROM node:12

WORKDIR /usr/src/app/test/src
COPY package.json ./

RUN npm install

COPY ./src ./src

CMD npm start