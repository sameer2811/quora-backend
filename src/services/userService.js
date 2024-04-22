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
}


module.exports = UserService;