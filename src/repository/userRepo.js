const BadRequest = require('../error/badRequest.error');
const {
    UserProfileSchema
} = require('./../models/');

const {
    v4: uuidv4
} = require('uuid');


class UserRespository {

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
            throw new BadRequest("Nothing passed to update ", "Please provide some data to update like userName , bio , hobbies");
        }

        try {
            let response = await UserProfileSchema.findOneAndUpdate({
                userId: id
            }, updatedUserData, {
                new: true
            });
            return response;
        } catch (error) {
            console.log("Some error occured at userService.js ", error);
            throw error;
        }
    }

    async performFollowAction(userId, targetId) {
        try {
            const userIdExist = await UserProfileSchema.find({
                userId: userId
            });
            if (userIdExist == null || userIdExist == undefined || userIdExist.length <= 0) {
                throw new BadRequest("Bad-Request", "User Id does not exist in the database. please verify it once again");
            }

            const targetIdExist = await UserProfileSchema.find({
                userId: targetId
            });

            if (targetIdExist == null || targetIdExist == undefined || targetIdExist.length <= 0) {
                throw new BadRequest("Bad-Request", "Target Id does not exist in the database. please verify it once again");
            }

            if (userId == targetId) {
                throw new BadRequest("Bad-Request", "You cannot follow YourSelf");
            }

            let res = await UserProfileSchema.find({
                userId : userId,
                following: {
                    $in: [targetId]
                }
            });

            console.log("response of the query is ", res);
            if (res.length > 0) {
                throw new BadRequest("Bad-Request", "You are already  following this person");
            }

            let followingResp = await UserProfileSchema.updateOne({
                userId: userId
            }, {
                $push: {
                    following: targetId
                }
            });

            let followerResp = await UserProfileSchema.updateOne({
                userId: targetId
            }, {
                $push: {
                    followers: userId
                }
            });

            return followingResp;
        } catch (error) {
            console.log("Certain error has occured in the perform Follow Action of the User Repo ", error);
            throw (error);
        }
    }

}

module.exports = UserRespository;