const {
    TopicSchema
} = require("../models/");

class TopicsRepositoty {
    async createNewTopic(text) {
        try {
            const response = await TopicSchema.create({
                topic: text
            })
            return response;
        } catch (error) {
            console.log("issue in topicsRepo.js  ")
            throw error;
        }
    }

    async getAllTopics() {
        try {
            const response = await TopicSchema.find({});
            return response;
        } catch (error) {
            console.log("issue in topicsRepo.js  ")
            throw error;
        }
    }

}

module.exports = TopicsRepositoty;