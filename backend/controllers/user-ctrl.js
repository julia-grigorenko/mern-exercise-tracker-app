const User = require('../models/user.model');

/*
Each function is responsible for a corresponding HTTP request, and returns the following appropriate response status code, along with some JSON data to look at!

201 - Resource Created
302 - Resource Found
301 - Resource Moved Permanently
202 - Resource Accepted

*/

const getUsers = async (req, res) => {
    await User.find()
            .then(users => res.json(users))
            .catch(err =>  res.status(400).json('Error: ' + err));
}
const getUser = async (req, res) => {
    //get the ID from the get request parameters.
    const {id} = req.params;

    // attempt to retrieve user
     await User.findOne({_id: id})
            .then(foundUser => {
                // return 404 if no user found, return user otherwise.
                if(!foundUser || foundUser.length == 0) {
                    res.status(404).json({message: "User not found!"});
                } else {
                    res.status(302).json(user);
                }
            })   
            .catch(err =>  res.status(400).json('Error: ' + err));
}

const addUser = async (req, res) => {
    const username = req.body.username;

    // check if database already contains this name
    const foundUser = await User.find({username});

    // if no user is found, we can add this user to the database.
    if(!foundUser || foundUser.length == 0) {
        const newUser = new User({username});

        await newUser.save()
            .then(() =>   res.status(201).json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    } else {
        res.status(409).json({message: "User already exists!"});
    }
}

const updateUser = async (req, res) => {
    const {id} = req.body;
    await User.findOne({_id: id})
                .then(foundUser => {
                    if(foundUser || foundUser.length != 0){
                        foundUser.updateOne({_id: id});
                        res.status(301).json('User updated!');
                    } else if(foundUser.length == 0) {
                    res.status(404).json({message: `User not found...`})
                    }
                })
                .catch(err => res.status(400).json('Error: ' + err));
    
}

const deleteUser = async (req, res) => {
    const {id} = req.body;
    const foundUser = await User.findOne({_id: id})
                .then(foundUser => {
                    if(foundUser || foundUser.length != 0){
                       foundUser.deleteOne({_id: id});
                        res.status(301).json('User deleted!');
                    } else if(foundUser.length == 0) {
                    res.status(404).json({message: `User not found...`})
                    }
                })
                .catch(err => res.status(400).json('Error: ' + err));
    
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}