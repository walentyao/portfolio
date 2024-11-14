FROM node:latest

WORKDIR /src/app

ENV PATH src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

CMD ["npm", "start"] 
