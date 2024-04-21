const {
    UserSchema
} = require('./../models/');

class UserRespository {
    constructor() {

    }

    async createNewUserId(userName, email) {
        try {
            // generating a new User Id. Since authentication is right now not ot take care about
            let userId = "6";
            let response = await UserSchema.create({
                UserName: userName,
                email: email,
                userId: userId,
                likes: 1
            })
            return response;
        } catch (error) {
            console.log("Some error occured at userService.js ");
            throw error;
        }

    }

    async fetchUserProfile(id) {
        try {

        } catch (error) {
            console.log("Some error occured at userService.js ");
            throw error;
        }
    }

    async updateUserProfile(id) {
        try {

        } catch (error) {
            console.log("Some error occured at userService.js ");
            throw error;
        }
    }
}

module.exports = UserRespository;