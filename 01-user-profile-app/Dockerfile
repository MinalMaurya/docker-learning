
FROM node:22-alpine

WORKDIR /docker-learning-lab/app

COPY ./app/package*.json ./

RUN npm ci --omit=dev

COPY ./app .

EXPOSE 3000

CMD ["npm", "start"]