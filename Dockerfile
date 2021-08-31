FROM registry.tccenter.ru/public/nginx:1.21.1-alpine
WORKDIR /usr/share/nginx/html
COPY ./build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]