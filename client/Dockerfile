FROM node:12.18.1-alpine3.9

# set working directory
RUN mkdir /app
WORKDIR /app

# install app dependencies
COPY package-lock.json package.json ./
RUN npm ci

COPY . .

CMD ["npm", "start"]
