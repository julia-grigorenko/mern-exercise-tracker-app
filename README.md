## demo app - developing with Docker

This demo app shows a simple exersice tracker. It keeps track of sport exersices user have already done. It allows to create users and users can create exercises.

* React frontend
* Nodejs backend with express module
* Mongodb for data storage
* Winston for logging

Logger shows logs using different colors based on their severity, and another important feature is that all these logs are also printed out inside the all.log and error.log files under the logs directory.

All components are docker-based

To start the application with Docker Compose

Step 1: Run docker-compose up -d to build images and spin up the containers with react application, node.js backend, mongodb and mongo-express UI.

    docker-compose up -d

Step 2: Get accsess to  
* React app on http://localhost:3001/
* Node.js backend on http://localhost:5000/
* Mongo-express UI on http://localhost:8081/

You can interact with mongodb through GUI provides with Mongo-express UI.

Step 2: Run docker-compose down to stop and delete containers
    
    docker-compose down