# Start from ofificial Image with Node 14 on Alpin Linux 3.14
FROM node:14-alpine
# copy ..  copy all thing inside folder in here with  COPY ..

# copy all files we need to install dependencies and run our app
 COPY package.json . 
 COPY package-lock.json .
 COPY server.js . 
 COPY routes routes

# Install the dependencies
RUN npm ci

# Tell Docker the command to run when the container is Started
 CMD ["npm", "start"]