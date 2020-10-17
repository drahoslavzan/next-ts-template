# BUILD SITE
FROM node:14-alpine as sitebuilder

ENV SCARF_ANALYTICS=false

WORKDIR /build
RUN chown node:node /build

USER node
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .

RUN npm audit fix
RUN npm run build

# RUN
FROM node:14-alpine

ENV SCARF_ANALYTICS=false

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY *.js ./
COPY public/ ./public/
COPY src/scripts/i18n.js ./src/scripts/i18n.js
COPY --from=sitebuilder /build/.next/ /app/.next/

EXPOSE 8000
CMD [ "npm", "start" ]