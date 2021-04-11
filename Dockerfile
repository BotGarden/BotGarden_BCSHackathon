FROM node

# Create app directory
WORKDIR /usr/app

ARG NODE_ENV_ARG
ARG ASKBCSBOT_TOKEN_ARG
ARG ASKTABOT_TOKEN_ARG

# Define env variables, These would be overwritten
ENV NODE_ENV=$NODE_ENV_ARG
ENV ASKBCSBOT_TOKEN=$ASKBCSBOT_TOKEN_ARG
ENV ASKTABOT_TOKEN=$ASKTABOT_TOKEN_ARG

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