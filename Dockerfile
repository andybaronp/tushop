FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app/react-app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:18-alpine as PRODUCTION_IMAGE


WORKDIR /app/react-app 

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/

COPY --from=BUILD_IMAGE /app/react-app/node_modules /app/react-app/node_modules

EXPOSE 8080

COPY package*.json .
COPY vite.config.ts .
RUN  npm install typescript
EXPOSE 8080

CMD ["npm", "run","preview"]

