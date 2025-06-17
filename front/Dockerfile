FROM node:18-alpine
WORKDIR /app
COPY ./package.json .
RUN npm config ls -l &&\
    npm config delete proxy &&\
    npm install -d
COPY . .
EXPOSE 7777
CMD [ "npm","run","dev" ]