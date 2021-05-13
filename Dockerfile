FROM node:10.11.0-alpine AS JS

WORKDIR /app

COPY package* *.js  ./

RUN npm set progress=false && npm config set depth 0
RUN npm ci

COPY src src/
COPY public public/

RUN npm run build

FROM nginx:1.15.9-alpine AS NGINX

COPY --from=JS /app/dist dist/

RUN rm -f package* *.js