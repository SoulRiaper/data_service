
# build environment
FROM node:18.16.0-alpine as base
COPY package.json ./
RUN yarn install
COPY src ./src
COPY tsconfig.json ./tsconfig.json
RUN npm run build

# run environment
FROM node:18.16.0-alpine

COPY --from=base ./node_modules ./node_modules
COPY --from=base ./package.json ./package.json
COPY --from=base /build /build

CMD ["npm", "run", "start"]