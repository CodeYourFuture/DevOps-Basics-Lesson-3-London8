FROM node:14-alpine3.14

# Copy all files we need
COPY package.json .
COPY package-lock.json .
COPY server.js .
COPY routes routes

# Install the dependencies
RUN npm ci

# Tell the docker to run
CMD ["npm", "start"]
