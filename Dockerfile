# Stage 1: install dependencies and build
FROM node:20.10-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .


# Install only production dependencies
RUN npm install --production


# Stage 2: create a smaller image for production
FROM node:20.10-alpine AS production

WORKDIR /app

COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]