FROM node

# Create app directory
WORKDIR /usr/src/app

RUN chmod g+rwx /usr/share/app && chown node.root /usr/share/app

USER node:root

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["npm", "run", "start"]
