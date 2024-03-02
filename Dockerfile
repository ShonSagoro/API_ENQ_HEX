# Usa una imagen base de Node.js con TypeScript preinstalado
FROM node:21

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY public ./public
COPY .env ./.env

COPY dist ./dist

RUN npm install

EXPOSE 8080

CMD ["node", "dist/app.js"]