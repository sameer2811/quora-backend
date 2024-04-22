class UserService {

    constructor(UserRepo) {
        this.UserRepo = UserRepo;
    }

    async createNewUserId(userName, userEmail) {
        try {
            const data = await this.UserRepo.createNewUserId(userName, userEmail);
            return data;
        } catch (error) {
            console.log("Some error occured at userService.js ", error);
            throw error;
        }
    }

    async fetchUserProfile(id) {
        try {
            const data = await this.UserRepo.fetchUserProfile(id);
            return data;
        } catch (error) {
            console.log("Some error occured at userService.js ", error);
            throw error;
        }
    }

    async updateUserProfile(updatedData, id) {
        try {
            const data = await this.UserRepo.updateUserProfile(updatedData, id);
            return data;
        } catch (error) {
            console.log("Some error occured at userService.js ", error);
            throw error;
        }
    }

    async performFollowAction(userId, targetId) {
        try {
            const data = await this.UserRepo.performFollowAction(userId, targetId);
            return data;
        } catch (error) {
            console.log("Certain error has occured in the perform Follow Action of the User Service ", error);
            throw (error);
        }
    }
}

module.exports = UserService;