FROM node:14-alpine

# means copy everithing
# COPY . . 

# copy only this
COPY package.json .
COPY package-lock.json .
COPY server.js .
COPY routes routes

RUN npm ci

CMD [ "npm", "start" ]
