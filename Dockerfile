FROM node

# Create app directory
WORKDIR /usr/app

# Define env variables, These would be overwritten
ENV NODE_ENV production
ENV ASKBCSBOT_TOKEN default
ENV ASKTABOT_TOKEN default

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 4000
CMD node ./build/index.js