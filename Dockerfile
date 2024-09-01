
# build environment
FROM node:18.16.0-alpine
COPY package.json ./
RUN yarn install
COPY src ./src
COPY tsconfig.json ./tsconfig.json
RUN npm run build
CMD ["npm", "run", "start"]