# ------------------
# Stage 1: The Build Stage
# Uses a robust Node base image to install dependencies and build the Next.js app.
# ------------------
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lockfiles
# The Next.js build requires dev dependencies, so we install everything here.
COPY package.json yarn.lock package-lock.json* ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Execute the production build command
RUN npm run build

# ------------------
# Stage 2: The Production Runner Stage
# Uses a minimal base image for the final production deployment.
# This results in a smaller, more secure final image.
# ------------------
FROM node:20-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy essential runtime files from the 'builder' stage
# We only copy what's needed for 'npm start' to run a built Next.js app.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the default Next.js port
EXPOSE 3000

# Set the command to start the application in production mode
CMD ["npm", "start"]
