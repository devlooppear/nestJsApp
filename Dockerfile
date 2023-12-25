# Use an official Node.js runtime as a base image
FROM node:20 as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install Nest CLI
RUN npm i -g @nestjs/cli

# Bundle app source
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the app in watch mode
CMD ["npm", "run", "start:dev"]
