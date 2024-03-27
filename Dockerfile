# Use a Node.js version that meets Next.js requirements
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock file
COPY package*.json yarn.lock* ./

# Install dependencies
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build || yarn build

# Start the Next.js app
CMD ["npm", "start"] # Or use ["yarn", "start"]
