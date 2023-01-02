FROM node:18.12.1

WORKDIR /home/app

COPY . .

RUN npm install

CMD ["node","index.js"]