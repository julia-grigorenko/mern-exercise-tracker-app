db.getSiblingDB('admin').auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD
);
db.createUser(
  {
    user: process.env.MONGODB_APP_USER,
    pwd: process.env.MONGODB_APP_PASSWORD,
    roles: [
      { 
	role: "readWrite", 
	db: process.env.MONGO_INITDB_DATABASE 
      }
    ]
  }
)
