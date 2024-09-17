FROM node:lts-alpine

WORKDIR /usr/app

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
