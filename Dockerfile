FROM node:14-buster

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn add react-scripts@3.0.1 -g --silent

COPY . .

CMD ["yarn", "start"]