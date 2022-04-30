FROM node:16.14.2


WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

RUN npm install
EXPOSE 3000

CMD ["npm", "start"]