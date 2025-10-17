# Use official Bun image
FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN bun install

# Set environment variables
ENV NODE_ENV=production
ENV TZ=Asia/Kuala_Lumpur

# Build frontend
WORKDIR /app/frontend
RUN bun vite build --mode production

# Back to root for running server
WORKDIR /app

# Expose port (your backend port)
EXPOSE 5000

# Start backend server
CMD ["bun", "run", "prd"]
