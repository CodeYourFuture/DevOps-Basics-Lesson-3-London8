FROM node:14-alpine


# COPY . .      >>> get everything in this file and copy it (this is a comment)

# Copy all the files we need to install dependencies and run our app.
COPY package.json .
COPY package-lock.json .
COPY server.js .
COPY routes routes

# Install the dependencies
RUN npm install

# Tell Docker the command to run when the container is started
CMD ["npm", "start"]

