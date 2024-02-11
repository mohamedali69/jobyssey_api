# Use the official Node.js image as the base
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 5000

CMD ["npm", "start"]
