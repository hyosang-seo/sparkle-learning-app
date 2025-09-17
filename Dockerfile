FROM nginx:alpine

# Copy static files (now in root directory)
COPY *.html *.css *.js /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
