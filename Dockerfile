FROM node:18.12.1

WORKDIR /home/app

COPY package.json .
RUN npm install
COPY . .

CMD ["node","app.js"]