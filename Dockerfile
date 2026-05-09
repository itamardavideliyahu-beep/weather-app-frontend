# Multi-stage build for optimized production image

# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source code
COPY public/ ./public/
COPY src/ ./src/

# Build the application (REACT_APP_* vars are read during build)
RUN npm run build

# Stage 2: Serve static files with configurable port
FROM node:18-alpine

WORKDIR /app

# Lightweight static server that can bind Railway PORT env var
RUN npm install -g serve

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["sh", "-c", "serve -s build -l ${PORT:-3000}"]
