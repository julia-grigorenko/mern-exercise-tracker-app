#!/usr/bin/bash
mongosh "mongodb://mongo:27017"\
 --username $MONGO_INITDB_ROOT_USERNAME\
 --password $MONGO_INITDB_ROOT_PASSWORD\
 --authenticationDatabase admin\
 --eval "db.createUser({user: \"${MONGODB_APP_USER}\", pwd: \"${MONGODB_APP_PASSWORD}\", roles:[{role: \"readWrite\", db: \"$MONGO_INITDB_DATABASE\"}]})"
