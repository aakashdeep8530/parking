FROM nginx:1.21.1-alpine

# Copy all static content from the repository into NGINX's public directory
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]