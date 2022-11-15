FROM node:lts as builder

ARG REACT_APP_WEBAPI_URL
ARG PUBLIC_URL

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json /usr/src/app/
RUN npm ci
COPY . /usr/src/app

RUN REACT_APP_WEBAPI_URL=${REACT_APP_WEBAPI_URL} PUBLIC_URL=${PUBLIC_URL} npm run build
FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
RUN chown nginx.nginx /usr/share/nginx/html/ -R
