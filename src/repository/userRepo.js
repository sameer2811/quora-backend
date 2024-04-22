const BadRequest = require('../error/badRequest.error');
const {
    UserProfileSchema
} = require('./../models/');

const {
    v4: uuidv4
} = require('uuid');


class UserRespository {
    constructor() {

    }

    async createNewUserId(userName, email) {
        try {
            let userId = uuidv4();
            let response = await UserProfileSchema.create({
                UserName: userName,
                email: email,
                userId: userId,
            });
            return response;
        } catch (error) {
            console.log("Some error occured at userRepo.js ", error);
            throw error;
        }

    }

    async fetchUserProfile(id) {
        try {
            let response = await UserProfileSchema.find({
                userId: id
            })
            return response;
        } catch (error) {
            console.log("Some error occured at userService.js ", error);
            throw error;
        }
    }

    async updateUserProfile(updatedUserData, id) {
        // first checking whether the user even exists or not.
        let userExists = await UserProfileSchema.find({
            userId: id
        });

        if (userExists == null || userExists == undefined || userExists.length <= 0) {
            throw new BadRequest("Invalid User Id Passed ", "Please check whether the user id that you are trying to pass is even valid or not");
        }

        // Data is even coming for the updation or not
        if (Object.keys(updatedUserData).length <= 0) {
            throw new BadRequest("Nothing passed to update ", "Please provide some data to update");
        }

        try {
            let response = await UserProfileSchema.findOneAndUpdate({
                userId: id
            }, {
                $set: updatedUserData
            }, {
                new: true
            });
            return response;
        } catch (error) {
            console.log("Some error occured at userService.js ", error);
            throw error;
        }
    }
}

module.exports = UserRespository;