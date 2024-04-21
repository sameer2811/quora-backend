const {
    UserSchema
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
            let response = await UserSchema.create({
                UserName: userName,
                email: email,
                userId: userId,
            });
            return response;
        } catch (error) {
            console.log("Some error occured at userRepo.js ");
            throw error;
        }

    }

    async fetchUserProfile(id) {
        try {
            let response = await UserSchema.find({
                userId: id
            })
            return response;
        } catch (error) {
            console.log("Some error occured at userService.js ");
            throw error;
        }
    }

    async updateUserProfile(updatedUserData, id) {
        console.log("Printing the updated user Data", updatedUserData, id);
        try {
            let response = await UserSchema.findOneAndUpdate({
                userId: id
            }, {
                $set: updatedUserData
            }, {
                new: true
            });
            return response;
        } catch (error) {
            console.log("Some error occured at userService.js ");
            throw error;
        }
    }
}

module.exports = UserRespository;