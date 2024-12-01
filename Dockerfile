# Use an official Node.js image to build the app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files and build the app
COPY . .
RUN npm run build

# Use an Nginx image to serve the app
FROM nginx:1.21

# Copy the build files to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
