FROM node:16

WORKDIR /home/app

COPY . .

CMD ["node","index.js"]