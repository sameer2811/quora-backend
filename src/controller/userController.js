const {
    UserService
} = require('./../services');
const {
    UserRepository
} = require('./../repository/');
const {
    StatusCodes,
} = require('http-status-codes');

const NotFoundError = require('./../error/notFound.error');

const userService = new UserService(new UserRepository());
async function createNewUserId(req, res, next) {
    try {
        //TODO: Do Some validation of data coming here
        const userName = req.body.username;
        const userEmail = req.body.email;
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
        let id = req.params.id;
        let updatedData = req.body;
        const result = await userService.updateUserProfile(updatedData, id);
        if (result == null || result == undefined || result.length == 0) {
            throw new NotFoundError("INVALID REQUEST SENT ", {});
        }
        return res.status(StatusCodes.OK).json({
            sucess: true,
            response: result,
            "message": "Updated Profile Data"
        })
    } catch (error) {
        next(error)
    }
}

async function getUserDetails(req, res, next) {
    try {
        let id = req.params.id;
        const result = await userService.fetchUserProfile(id);
        if (result == null || result == undefined || result.length == 0) {
            throw new NotFoundError("INVALID REQUEST SENT ", {});
        }
        return res.status(StatusCodes.OK).json({
            sucess: true,
            response: result,
            "message": "Fetched Profile Data"
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
