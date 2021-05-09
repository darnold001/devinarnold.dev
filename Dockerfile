# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# set Docker port
EXPOSE 3000

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent\
 && npm install tsc -g
# add app
COPY . ./
# validate typescript installation
RUN tsc --version


# start app
CMD ["npm", "start"]