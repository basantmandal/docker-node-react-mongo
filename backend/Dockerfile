FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

RUN ls -al


# Install dependecies
RUN npm install

# Bundle app source into container
COPY . .

# Expose the port the app runs in
EXPOSE 3003

# Serve the app
CMD ["npm", "start"]
