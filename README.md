##demo app - developing with Docker
This demo app shows a simple exersice tracker

React frontend
Nodejs backend with express module
Mongodb for data storage

All components are docker-based

To start the application with Docker Compose

Step 1: Run docker-compose up -d to build images and spin up the containers with react application, node.js backend, mongodb and mongo-express UI.

    docker-compose up -d

Step 2: Get accsess to React app on http://localhost:3000/
Node.js backend on http://localhost:5000/
Mongo-express UI on http://localhost:8081/.

You can interact with mongodb through GUI provides with Mongo-express UI.

Step 2: Run docker-compose down to stop and delete containers
    
    docker-compose down