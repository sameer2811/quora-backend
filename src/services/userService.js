class UserService {

    constructor(UserRepo) {
        this.UserRepo = UserRepo;
    }

    async createNewUserId(userName, userEmail) {
        try {
            const data = await this.UserRepo.createNewUserId(userName, userEmail);
            return data;
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


module.exports = UserService;