FROM nginx:stable-alpine


RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY ./public .


EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]    