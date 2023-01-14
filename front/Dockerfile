# Frontend

FROM node:19 as build

WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY . /app


RUN npm run build -- --output-path=./build

FROM nginx:stable-alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
