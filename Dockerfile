FROM node:16.11-alpine

WORKDIR /srv/app
COPY . /srv/app/

CMD ["npm", "start"]