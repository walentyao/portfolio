FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy SSL certificates
COPY ./path/to/yourdomain.crt /etc/ssl/certs/yourdomain.crt
COPY ./path/to/yourdomain.key /etc/ssl/private/yourdomain.key

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
