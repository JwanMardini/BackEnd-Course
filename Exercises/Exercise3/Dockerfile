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
# docker run -d -p 3000:3000 --name book_app  -v C:\Users\jwan9\OneDrive\Skrivbord\BackEnd-Course\Exercises\Exercise3:/app -v node_modules book_review_app


