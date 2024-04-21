class TopicsService {
    constructor(topicRepo) {
        this.topicRepo = topicRepo;
    }
    async createNewTopic(text) {
        try {
            const data = await this.topicRepo.createNewTopic(text);
            return data;
        } catch (error) {
            throw error;
        }
    }
    async getAllTopics() {
        try {
            const data = await this.topicRepo.getAllTopics();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TopicsService