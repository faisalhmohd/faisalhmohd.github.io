FROM node:18

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn

CMD ["yarn", "start"]