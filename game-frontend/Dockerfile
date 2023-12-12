FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build
FROM nginx:alpine
COPY --from=builder /app/dist/game-frontend/browser/* /usr/share/nginx/html/
COPY --from=builder /app/dist/game-frontend/browser/assets/* /usr/share/nginx/html/assets/
COPY /nginx.conf /etc/nginx/conf.d/default.conf