FROM node:13-alpine

WORKDIR /usr/local/src/ideas-muscle

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build
#RUN npm audit fix

EXPOSE 3000

CMD [ "npm", "start" ]
