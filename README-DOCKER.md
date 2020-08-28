# DockerAngular

```
docker pull nginx:alpine
```

```
docker run -d -p 8080:80 nginx:alpine
```

```
docker ps
docker stop ID
```

```
ng new angular-client-course
ng build --prod
```


```
docker run -d -p 8080:80 -v $(pwd)/dist/angular-client-course:/usr/share/nginx/html --name angular1 nginx:alpine
```

Dockerfile v1
```
# Stage 0, based on Node.js, to build and compile Angular
FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=node /app/dist/angular-client-course /usr/share/nginx/html
```

```
docker build .
docker build . -t docker-angular-client-course:latest
```

```
docker run -d -p 8080:80 docker-angular-client-course:latest
docker run -d -p 80:80 docker-angular-client-course:latest
```

```
nginx-custom.conf
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
}
```
Dockerfile v2
```
# Stage 0, based on Node.js, to build and compile Angular
FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=node /app/dist/angular-client-course /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
```

```
docker build . -t docker-angular-client-course:latest
docker run -d -p 8080:80 --name angular2 docker-angular-client-course:latest 
docker run -d -p 80:80 --name angular2 docker-angular-client-course:latest
```