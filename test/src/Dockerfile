# FROM node:12

# WORKDIR /usr/src/app

# COPY ./test/src/package*.json ./

# RUN npm install

# COPY . . 

# CMD npm start

FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 4000

CMD ["npm", "start"]