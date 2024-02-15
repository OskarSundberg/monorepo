FROM node:12

WORKDIR /usr/test/src
COPY package*.json ./

RUN npm ci --omit=dev

COPY . . 

CMD npm start