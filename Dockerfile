FROM node
RUN chmod g+rwx /var/cache/ /var/run /var/log/ && \
    chown node.root /var/cache/ /var/run /var/log && \
# Create app directory
WORKDIR /usr/src/app
EXPOSE 8080

USER node:root

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

CMD ["npm", "run", "start"]
