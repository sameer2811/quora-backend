const {
    UserService
} = require('./../services');
const {
    UserRepository
} = require('./../repository/');
const {
    StatusCodes
} = require('http-status-codes');
const {
    response
} = require('express');

const userService = new UserService(new UserRepository());
async function createNewUserId(req, res, next) {
    try {
        //TODO: Do Some validation of data coming here
        const userName = req.body.userName;
        const userEmail = req.body.userEmail;
        const result = await userService.createNewUserId(userName, userEmail);
        res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: result,
            "message": "Your profile is now created"
        })
    } catch (error) {
        //TODO: define your error middleWare in the end
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        return res.json({
            "msg": "Server is running at updateUser"
        });
    } catch (error) {
        next(error)
    }
}

async function getUserDetails(req, res, next) {
    try {
        return res.json({
            "msg": "Server is running at getUserDetails"
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createNewUserId,
    updateUser,
    getUserDetails
}
