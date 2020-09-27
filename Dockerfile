FROM node:14.9.0-alpine AS development
WORKDIR /usr/src/frontend
COPY ./package.json yarn.lock ./
RUN yarn install
COPY ./ ./
RUN yarn build

FROM nginx:1.19.2-alpine AS production
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=development ./usr/src/frontend/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]