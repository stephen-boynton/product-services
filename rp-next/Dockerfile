FROM node:20-alpine3.19

# Create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# Install dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Next.js starts on port 3000 by default
EXPOSE 3000

# Command to run the app
CMD ["npm","run", "dev"]