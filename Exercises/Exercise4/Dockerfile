FROM node:latest

# Create app directory
WORKDIR /app

# Install nodemon for development
RUN npm install -g nodemon

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

# build the image
# docker build -t book_review_app .

# build a container from the image with volume mapping
# docker run -d -p 3000:3000 --name socail_app_c  -v C:\Users\jwanl\OneDrive\Desktop\BackEnd-Course\Exercises\Exercise4:/app -v node_modules social_app


