# Use Nginx as a base
FROM nginx:alpine

# Copy app files to Nginx web root
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# No command required, uses Nginx default
